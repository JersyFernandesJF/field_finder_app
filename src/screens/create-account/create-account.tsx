import { Block, Button, Text, CheckBox, InputForm } from "~/components";
import { useTheme } from "~/hooks/theme";
import { EmailIConTextIput, EyeIcon } from "~/assets/icons";
import { useState } from "react";

export const CreateAccountScreen = ({ navigation }: any) => {
  const { colors, fonts } = useTheme();
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Block  flex={1} justifyContent="space-between" px={30}>
        <Block>
             <InputForm placeholder="Jõao Amadeu" label="Name" />
      <InputForm
        placeholder="example@gmail.com"
        label="Email"
      />
      <InputForm placeholder="xxx xxx xxx" label="Phone Number" />
      <InputForm
        password={showPassword}
        right={
          <EyeIcon
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginRigtht: 10 }}
          />
        }
        placeholder="Password"
        label="Password"
      />
      <InputForm
        password={showPassword}
        right={
          <EyeIcon
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginRigtht: 10 }}
          />
        }
        placeholder="Password"
        label="Confirm Password"
      />

        </Block>
     
      <Block my={50}>
        <Button defaultStyle>Create Account</Button>
      </Block>
    </Block>
  );
};
