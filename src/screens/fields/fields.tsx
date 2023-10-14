import { Block, Text, CardIformation, Button, Input } from "~/components";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { PinSVGIcon } from "~/assets/icons";
import { FilterIcons } from "~/assets/icons/sports";
import { useSportsList } from "~/config/firebase/Providers/SportsProvider";
import { useFieldsList } from "~/config/firebase/Providers/FieldsProvider";

type Props = NativeStackScreenProps<MainStackParamsList, "HomeTabs">;

export const FieldsScreen = () => {
  const navigation = useNavigation<Props["navigation"]>();
  const [fields, setFields] = useState(useFieldsList());
  const { colors, fonts } = useTheme();
  const [sports, setSports] = useState(useSportsList());

  const listIcons = sports.map((sport) => {
    return sport.name;
  });
  const Icons = FilterIcons(listIcons);
  const setIcon = (name: string) => {
    if (Object.keys(Icons).includes(name)) return Icons[name];
  };

  return (
    <Block flex={1} center>
      <ScrollView style={{ marginTop: 60 }}>
        <Block center>
          <Input
            left={<PinSVGIcon style={{ marginLeft: 10, marginRight: 10 }} />}
            placeholder="Enter an address, Field or Sport"
            standard
          />
        </Block>
        <Block marginTop={30}>
          <Block mb={10} marginLeft={20}>
            <Text fontSize={16} font={fonts.inter[600]}>
              Popular Fields
            </Text>
          </Block>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {Array(4)
              .fill(1)
              .map((_, index) => {
                return (
                  <Button
                    onPress={() =>
                      navigation.navigate("FieldsDetails", {
                        name: "wdss",
                        price: 34,
                        details: "werfw",
                        rules: ["ewrew"],
                        address: "ewrwerw",
                        availability: true,
                      })
                    }
                  >
                    <CardIformation
                      name="St. Bento"
                      price={25}
                      imageSource={require("../../assets/image/onboarding/onboarding2.png")}
                    />
                  </Button>
                );
              })}
          </ScrollView>
        </Block>
        <Block px={20} mt={20}>
          <Block marginVertical={10}>
            <Text fontSize={16} font={fonts.inter[600]}>
              All fields
            </Text>
          </Block>
          <Block>
            {Array(4)
              .fill(1)
              .map((_, index) => {
                return (
                  <Button
                    onPress={() =>
                      navigation.navigate("FieldsDetails", {
                        name: "wdss",
                        price: 34,
                        details: "werfw",
                        rules: ["ewrew", "sdldmldsfç", "flçmfeçm"],
                        address: "ewrwerw",
                        availability: true,
                      })
                    }
                  >
                    <CardIformation
                      name="St. Bento"
                      longCard
                      price={25}
                      imageSource={require("../../assets/image/onboarding/onboarding2.png")}
                    />
                  </Button>
                );
              })}
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};
