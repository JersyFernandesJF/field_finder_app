import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Block, Button, Text } from "~/components";
import { MainStackParamsList } from "~/router";
import { Image } from "react-native";
import { useTheme } from "~/hooks/theme";

type Props = NativeStackScreenProps<MainStackParamsList, "ChangedPassword">;

export const ChangedPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  return (
    <Block flex={1} justifyContent="space-around" px={30}>
      <Block>
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
      </Block>

      <Block center my={50}>
        <Button defaultStyle onPress={() => navigation.navigate("SignIn")}>
          Continue with Login
        </Button>
      </Block>
    </Block>
  );
};
