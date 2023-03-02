import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EyeSVGIcon } from "~/assets/icons";

import { Block, Button, InputFormField } from "~/components";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUp">;

export const SignUpScreen = ({ navigation }: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Block flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputFormField standard placeholder="Joao Amadeu" label="Name" />
        <Block my={10} />
        <InputFormField
          standard
          placeholder="example@gmail.com"
          label="Email"
        />
        <Block my={10} />

        <InputFormField
          standard
          placeholder="xxx xxx xxx"
          label="Phone Number"
        />
        <Block my={10} />

        <InputFormField
          right={
            <EyeSVGIcon
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginRight: 10 }}
            />
          }
          standard
          placeholder="Password"
          label="Password"
        />
        <Block my={10} />

        <InputFormField
          standard
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
