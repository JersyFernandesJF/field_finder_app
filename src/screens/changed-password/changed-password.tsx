import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Block, Button, Text } from "~/components";
import { MainStackParamsList } from "~/router";
import { useTheme } from "~/hooks/theme";

type Props = NativeStackScreenProps<MainStackParamsList, "ChangedPassword">;

export const ChangedPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  return (
    <Block flex={1} justifyContent="space-between" px={30}>
      <Block>
        <Text
          textAlign="center"
          color={colors.black}
          font={fonts.inter[600]}
          fontSize={22}
        >
          Congratulations
        </Text>
        <Text textAlign="center" color={colors.dark[1]}>
          You have successfully changed {"\n"} password.
        </Text>
      </Block>

      <Block my={50}>
        <Button defaultStyle onPress={() => navigation.navigate("SignIn")}>
          Continue with Login
        </Button>
      </Block>
    </Block>
  );
};
