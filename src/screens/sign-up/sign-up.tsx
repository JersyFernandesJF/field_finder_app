import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {Alert} from "react-native"
import { EyeSVGIcon } from "~/assets/icons";
import { Block, Button, InputFormField } from "~/components";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/AuthProvider";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUp">;

interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}
export const SignUpScreen = ({ navigation }: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useAuth()
  
   async function SignUp() {
     try {
      if(password == confirmPassword){
       await signUp(email, password)
         .then((_) => {
          Alert.alert("Sucessfully!")
           navigation.navigate("HomeTabs");
         })
         .catch((err) => {
           console.log(err.code);
           console.log(err.message);
         });
      }
     } catch (error: unknown) {
       console.log(error);
     }
   }


  return (
    <Block flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputFormField standard placeholder="Joao Amadeu" label="Name" />
        <Block my={10} />
        <InputFormField
          standard
          placeholder="example@gmail.com"
          label="Email"
          onChangeText={setEmail}
          value={email}
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
          onChangeText={setPassword}
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
          onChangeText={setConfirmPassword}
          placeholder="Password"
          label="Confirm Password"
        />
      </Block>

      <Block my={50}>
        <Button defaultStyle onPress={SignUp}>
          Create Account
        </Button>
      </Block>
    </Block>
  );
};
