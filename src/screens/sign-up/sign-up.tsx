import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { Alert, StyleSheet, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useTheme } from "~/hooks/theme";
import {
  Block,
  Button,
  InputFormField,
  Text,
  InputFormFieldPassword,
  InputFormFieldNumber,
} from "~/components";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUp">;

interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}
export const SignUpScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useAuth();

  async function SignUp() {
    navigation.navigate("Interest");
    // try {
    //   if (password == confirmPassword) {
    //     await signUp(email, password, name, number)
    //       .then((_) => {
    //         navigation.navigate("HomeTabs");
    //       })
    //       .catch((err) => {
    //         console.log(err.code);
    //         console.log(err.message);
    //       });
    //   }
    // } catch (error: unknown) {
    //   console.log(error);
    // }
  }

  return (
    <Block flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputFormField
          standard
          placeholder="Joao Amadeu"
          label="Name"
          onChangeText={setName}
          value={name}
        />
        <Block my={10} />
        <InputFormField
          standard
          placeholder="example@gmail.com"
          label="Email"
          onChangeText={setEmail}
          value={email}
        />
        <Block my={10} />
        <InputFormFieldNumber label="Number Phone" />
        <Block my={10} />

        <InputFormFieldPassword
          standard
          placeholder="Password"
          onChangeText={setPassword}
          label="Password"
        />
        <Block my={10} />

        <InputFormFieldPassword
          standard
          onChangeText={setConfirmPassword}
          placeholder="Password"
          label="Confirm Password"
        />
      </Block>

      <Block my={50}>
        <Block center my={12}>
          <Button defaultStyle onPress={SignUp}>
            Create Account
          </Button>
        </Block>
        <Block row center>
          <Text
            textAlign="center"
            color={colors.blue[10]}
            font={fonts.inter[400]}
            size={15}
          >
            Do you have any account?
          </Text>
          <Button onPress={() => navigation.navigate("SignIn")}>
            <Text color={colors.blue[1]} font={fonts.inter[400]} size={15}>
              {" "}
              Sign In
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
