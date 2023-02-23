import { Block, Button, Text, InputForm } from "~/components";
import { useTheme } from "~/hooks/theme";
import { EmailIConTextIput } from "~/assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, 'ForgotOption'>;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} px={30}>
      <Block>
        <Text fontSize={22} font={fonts.inter[400]} textAlign="center">
          Please enter your Registered email ID
        </Text>
      </Block>
      <Block my={30}>
        <Text textAlign="center" color={colors.dark[1]}>
          We will send a verification code to your registered email ID
        </Text>
      </Block>
      <Block>
        <InputForm
          left={<EmailIConTextIput style={{ marginRight: 10 }} />}
          placeholder="Email"
          label="Email"
        />
      </Block>
      <Block my={50}>
        <Button defaultStyle>Send instruction</Button>
      </Block>
    </Block>
  );
};
