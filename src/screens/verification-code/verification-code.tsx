import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Block, Button, InputFormField, Text } from "~/components";
import { MainStackParamsList } from "~/router";
import { useTheme } from "~/hooks/theme";

type Props = NativeStackScreenProps<MainStackParamsList, "VerificationCode">;

export const VerificationCodeScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  return (
    <Block flex={1} px={30}>
      <Block my={30}>
        <Text textAlign="center" color={colors.dark[1]}>
          We’ve sent a OTP verification code
        </Text>
        <Text textAlign="center" color={colors.dark[1]}>
          to your email
        </Text>
      </Block>
      <Block row justifyContent="space-around">
        <InputFormField standard number placeholder="1" />
        <InputFormField standard number placeholder="2" />
        <InputFormField standard number placeholder="5" />
        <InputFormField standard number placeholder="3" />
        <InputFormField standard number placeholder="4" />
      </Block>
      <Block row my={18}>
        <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={15}
        >
          Resend code in
        </Text>
        <Text
          textAlign="center"
          color={colors.blue[1]}
          font={fonts.inter[400]}
          size={15}
        >
          {" "}
          00:45
        </Text>
      </Block>

      <Block my={50}>
        <Button
          defaultStyle
          onPress={() => navigation.navigate("ChangePassword")}
        >
          Verify
        </Button>
        <Block my={20} row center>
          <Text
            textAlign="center"
            color={colors.blue[10]}
            font={fonts.inter[400]}
            size={15}
          >
            Didn’t receive code?
          </Text>
          <Button onPress={() => navigation.navigate("SignUp")}>
            <Text color={colors.blue[1]} font={fonts.inter[400]} size={15}>
              {" "}
              Resend Code.
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};