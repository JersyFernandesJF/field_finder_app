import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EyeSVGIcon } from "~/assets/icons";
import { Button, InputFormField } from "~/components";
import { MainStackParamsList } from "~/router";
import { View } from "react-native";

type Props = NativeStackScreenProps<MainStackParamsList, "ChangePassword">;

export const ChangePasswordScreen = ({ navigation }: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={{flex: 1, paddingHorizontal: 30}} >
      <View>
        <View />

        <InputFormField
          right={<EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />}
          standard
          placeholder="Password"
          label="Password"
        />
        <View/>

        <InputFormField
          standard
          right={<EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />}
          placeholder="Password"
          label="Confirm Password"
        />
      </View>

      <View>
        <Button
          defaultStyle
          onPress={() => navigation.navigate("ChangedPassword")}
        >
          Change Password
        </Button>
      </View>
    </View>
  );
};
