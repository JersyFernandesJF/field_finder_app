import { Block, Text, CardIformation, Button } from "~/components";
import { ScrollView } from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackOnTabParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<MainStackOnTabParamsList, "Fields">;

export const FieldsScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  return (
    <Block flex={1} center safe>
      <ScrollView>
        <Block marginTop={30}>
          <Block mb={10} marginLeft={20}>
            <Text fontSize={16} font={fonts.inter[600]}>
              Popular Fields
            </Text>
          </Block>

          <ScrollView
            style={{ height: 200 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            {Array(4)
              .fill(1)
              .map((_, index) => {
                return (
                  <Button onPress={() => navigation.navigate("FieldsDetails")}>
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
                  <Button onPress={() => navigation.navigate("FieldsDetails")}>
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
