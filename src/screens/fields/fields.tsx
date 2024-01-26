import { Block, Text, CardIformation, Button, Input } from "~/components";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, SafeAreaView } from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FilterIcons } from "~/assets/icons/sports";
import { useSportsList } from "~/config/firebase/Providers/SportsProvider";
import { useFieldsList } from "~/config/firebase/Providers/FieldsProvider";
import Db from "~/assets/dummy/db.json";

type Props = NativeStackScreenProps<MainStackParamsList, "HomeTabs">;

export const FieldsScreen = () => {
  const { fieldsDB } = Db;
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
    <SafeAreaView>
      <ScrollView>
        <Block marginBottom={10}>
          <Block mb={10} marginLeft={20}>
            <Text fontSize={16} font={fonts.inter[600]}>
              Popular Fields
            </Text>
          </Block>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {fieldsDB.map((field) => {
              return (
                <Button
                  marginVertical={10}
                  onPress={() =>
                    navigation.navigate("FieldsDetails", { data: field })
                  }
                >
                  <CardIformation data={field} />
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
            {fieldsDB.map((field) => {
              return (
                <Button
                  onPress={() =>
                    navigation.navigate("FieldsDetails", { data: field })
                  }
                >
                  <CardIformation data={field} longCard />
                </Button>
              );
            })}
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};
