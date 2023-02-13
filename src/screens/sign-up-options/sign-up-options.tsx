import { Block, Button, Line} from "~/components";
import { Text } from "~/components/text";
import { useTheme } from "~/hooks/theme";
import { FacebookIcon, GoogleIcon, AppleIcon, EmailIcon } from "~/assets/icons"

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
        <Button socialButton  left={<Block><GoogleIcon/></Block>} >Continue with Google</Button>
        <Block my={15}>
          <Button socialButton left={<Block><AppleIcon/></Block>} >Continue with Apple</Button>
        </Block>
        <Button socialButton left={<Block><FacebookIcon/></Block>} >Continue with Facebook</Button>
      </Block>

       <Line>or</Line>

      <Block>
        <Button left={<Block><EmailIcon/></Block>} defaultStyle>Sign up with Email</Button>
        <Block center mt={20}>
          <Text color={colors.blue[10]} font={fonts.inter[400]} size={15}>
            Already have an Account? <Text font={fonts.inter[600]} color={colors.blue[1]}>Log In</Text>
          </Text>
        </Block>
      </Block>

      <Block center>
        <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={13}
        >
          By using the app, I agree to The Sports  <Text  highlighted>Terms of {`\n`} Service </Text>
            and <Text highlighted>Privacy Policy</Text>
        </Text>
      </Block>
    </Block>
  );
};
