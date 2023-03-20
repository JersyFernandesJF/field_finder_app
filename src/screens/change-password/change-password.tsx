import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EyeSVGIcon } from "~/assets/icons";
import { Block, Button, InputFormField } from "~/components";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "ChangePassword">;

export const ChangePasswordScreen = ({ navigation }: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Block flex={1} px={30}>
      <Block>
        <Block my={10} />

        <InputFormField
          right={<EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />}
          standard
          placeholder="Password"
          label="Password"
        />
        <Block my={10} />

        <InputFormField
          standard
          right={<EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />}
          placeholder="Password"
          label="Confirm Password"
        />
      </Block>

      <Block my={50}>
        <Button
          defaultStyle
          onPress={() => navigation.navigate("ChangedPassword")}
        >
          Change Password
        </Button>
      </Block>
    </Block>
  );
};