import { useState } from "react";
import { Block, Button, InputFormField, Text } from "~/components";
import { useTheme } from "~/hooks/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EmailSVGIcon } from "~/assets/icons";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";
import { View } from "react-native";

type Props = NativeStackScreenProps<MainStackParamsList, "ForgotPassword">;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1, paddingHorizontal: 30}}>
      <View style={{ marginVertical: 30}}>
        <Text textAlign="center" color={colors.dark[1]}>
          We will send a verification code to your registered email ID
        </Text>
      </View>
      <View>
        <InputFormField
          standard
          left={<EmailSVGIcon style={{ marginRight: 10 }} />}
          placeholder="Email"
          onChangeText={setEmail}
          label="Email"
        />
      </View>
      <View style={{ marginVertical: 50}}>
        <Button defaultStyle>
          Send instruction
        </Button>
      </View>
    </View>
  );
};
