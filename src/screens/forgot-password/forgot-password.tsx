import { Block, Button, InputFormField, Text } from "~/components";
import { useTheme } from "~/hooks/theme";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EmailSVGIcon } from "~/assets/icons";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "ForgotPassword">;

export const ForgotPasswordScreen = ({}: Props) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} px={30}>
      <Block my={30}>
        <Text textAlign="center" color={colors.dark[1]}>
          We will send a verification code to your registered email ID
        </Text>
      </Block>
      <Block>
        <InputFormField
          standard
          left={<EmailSVGIcon style={{ marginRight: 10 }} />}
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
