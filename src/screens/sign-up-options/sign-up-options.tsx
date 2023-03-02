import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AppleSVGIcon,
  EmailWhiteSVGIcon,
  FacebookSVGIcon,
  GoogleSVGIcon,
} from "~/assets/icons";
import { Block, Button, Line } from "~/components";
import { Text } from "~/components/text";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUpOptions">;

export const SignUpOptionsScreen = ({ navigation }: Props) => {
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
        {[
          { icon: GoogleSVGIcon, label: "Continue with Google" },
          { icon: AppleSVGIcon, label: "Continue with Apple", separate: true },
          { icon: FacebookSVGIcon, label: "Continue with Facebook" },
        ].map(({ label, icon: Icon, separate }, idx) => (
          <Button
            key={"icon" + idx}
            row
            bordered
            my={separate ? 15 : undefined}
            left={
              <Block marginLeft={32}>
                <Icon />
              </Block>
            }
          >
            <Block flex={1} center>
              <Text>{label}</Text>
            </Block>
          </Button>
        ))}
      </Block>

      <Line>or</Line>

      <Block>
        <Button
          row
          left={
            <Block marginRight={12}>
              <EmailWhiteSVGIcon />
            </Block>
          }
          defaultStyle
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up with Email
        </Button>
        <Block center row mt={20}>
          <Text color={colors.blue[10]} font={fonts.inter[400]} size={15}>
            Already have an Account?
          </Text>
          <Button onPress={() => navigation.navigate("SignIn")}>
            <Text color={colors.blue[1]} fontSize={15} font={fonts.inter[600]}>
              {" "}
              Log In
            </Text>
          </Button>
        </Block>
      </Block>

      <Block center>
        <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={13}
        >
          By using the app, I agree to The Sports{" "}
          <Text highlighted>Terms of {`\n`} Service </Text>
          and <Text highlighted>Privacy Policy</Text>
        </Text>
      </Block>
    </Block>
  );
};
