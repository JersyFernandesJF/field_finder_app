import { Block, Button } from "~/components";
import { Text } from "~/components/text";
import { useTheme } from "~/hooks/theme";

export const SignUpOptionsScreen = () => {
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
        <Button socialButton>Continue with Google</Button>
        <Block my={15}>
          <Button socialButton>Continue with Apple</Button>
        </Block>
        <Button socialButton>Continue with Facebook</Button>
      </Block>

      <Block center>
        <Text color={colors.blue[10]} font={fonts.inter[500]} size={17}>
          or
        </Text>
      </Block>

      <Block>
        <Button defaultStyle>Sign up with Email</Button>
        <Block center mt={20}>
          <Text>Already have an Account? Log In</Text>
        </Block>
      </Block>

      <Block center>
        <Text textAlign="center">
          By using the app, I agree to The Sports Terms of {`\n`}
          Service and Privacy Policy
        </Text>
      </Block>
    </Block>
  );
};
