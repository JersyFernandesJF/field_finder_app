import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "~/components";
import { MainStackParamsList } from "~/router";
import { Image, View } from "react-native";
import { useTheme } from "~/hooks/theme";


type Props = NativeStackScreenProps<MainStackParamsList, "ChangedPassword">;

export const ChangedPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  return (
    <View>
      <View>
        <Image
          style={{
            width: 213,
            height: 213,
            alignSelf: "center",
            marginBottom: 40,
          }}
          source={require("../../assets/icons/congratulations/congratulations.png")}
        />
        <Text
          textAlign="center"
          color={colors.black}
          font={fonts.inter[600]}
          fontSize={22}
          style={{ marginBottom: 14 }}
        >
          Congratulations
        </Text>
        <Text textAlign="center" color={colors.dark[1]}>
          You have successfully changed {"\n"} password.
        </Text>
      </View>

      <View>
        <Button defaultStyle onPress={() => navigation.navigate("SignIn")}>
          Continue with Login
        </Button>
      </View>
    </View>
  );
};
