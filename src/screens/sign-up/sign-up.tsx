import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EyeSVGIcon } from "~/assets/icons";

import { Block, Button, InputForm } from "~/components";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUp">;

export const SignUpScreen = ({ navigation }: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Block flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputForm placeholder="Joao Amadeu" label="Name" />
        <InputForm placeholder="example@gmail.com" label="Email" />
        <InputForm placeholder="xxx xxx xxx" label="Phone Number" />
        <InputForm
          password={showPassword}
          right={
            <EyeSVGIcon
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginRight: 10 }}
            />
          }
          placeholder="Password"
          label="Password"
        />
        <InputForm
          password={showPassword}
          right={
            <EyeSVGIcon
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginRight: 10 }}
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
