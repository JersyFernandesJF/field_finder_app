import { Block, Button } from "~/components";
import { Text } from "~/components/text";
import { useTheme } from "~/hooks/theme";
import { EmailIcon } from "~/assets/icons";

export const LoginScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block>
        <Text
          textAlign="center"
          color={colors.dark[1]}
          font={fonts.inter[400]}
          size={15}
        >
          Choose a way to create an account and browse all of resources
        </Text>
      </Block>

      <Block>
        <Button defaultStyle>Login</Button>
      </Block>

      <Block center>
        <Block center mt={20}>
          <Text color={colors.blue[10]} font={fonts.inter[400]} size={15}>
            Forgot password?
          </Text>
        </Block>
        <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={13}
          onPress={() => navigation.navigate("SignUpOptions")}
        >
          Don't have an account yet? Create Account
        </Text>
      </Block>
    </Block>
  );
};
