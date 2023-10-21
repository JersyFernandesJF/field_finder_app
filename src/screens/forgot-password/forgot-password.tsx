import { useState } from "react";
import { Block, Button, InputFormField, Text } from "~/components";
import { useTheme } from "~/hooks/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EmailSVGIcon } from "~/assets/icons";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";

type Props = NativeStackScreenProps<MainStackParamsList, "ForgotPassword">;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const [email, setEmail] = useState("");
  // const { resetPassword } = useAuth();

  async function sendCode() {
    navigation.navigate("VerificationCode");
    // try {
    //   await resetPassword(email)
    //     .then((_) => {

    //     })
    //     .catch((err: any) => {
    //       console.log(err.code);
    //       console.log(err.message);
    //     });
    // } catch (error: unknown) {
    //   console.log(error);
    // }
  }
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
          onChangeText={setEmail}
          label="Email"
        />
      </Block>
      <Block my={50} center>
        <Button defaultStyle onPress={sendCode}>
          Send instruction
        </Button>
      </Block>
    </Block>
  );
};
