import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EmailSVGIcon } from "~/assets/icons";
import {
  Block,
  Button,
  CheckBox,
  InputFormField,
  Text,
  InputFormFieldPassword,
} from "~/components";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<MainStackParamsList, "SignIn">;

export const SignInScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const { signIn } = useAuth();

  async function Sigin() {
    navigation.navigate("HomeTabs");
    // try {
    //   await signIn(email, password)
    //     .then(async (userCredential) => {
    //       const user = userCredential.user;
    //       const idToken = await user.getIdToken();
    //       if (remember) await AsyncStorage.setItem("token", idToken);
    //       navigation.navigate("HomeTabs");
    //     })
    //     .catch((_) => {
    //       Alert.alert("Error", "Wrong email or password!");
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputFormField
          standard
          security={false}
          left={<EmailSVGIcon style={{ marginRight: 10 }} />}
          placeholder="Email"
          label="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Block mt={10}>
          <InputFormFieldPassword
            standard
            placeholder="Password"
            label="Password"
            onChangeText={setPassword}
          />
        </Block>
        <Block my={10}>
          <CheckBox active={remember} onPress={() => setRemember(!remember)} />
        </Block>
      </Block>
      <Block center>
        <Button defaultStyle onPress={Sigin}>
          Login
        </Button>
      </Block>

      <Block center my={30}>
        <Block center mt={20} my={12}>
          <Button onPress={() => navigation.navigate("ForgotPassword")}>
            <Text color={colors.blue[1]} font={fonts.inter[400]} fontSize={15}>
              Forgot password?
            </Text>
          </Button>
        </Block>
        <Block row center>
          <Text
            textAlign="center"
            color={colors.blue[10]}
            font={fonts.inter[400]}
            size={15}
          >
            Don't have an account yet?
          </Text>
          <Button onPress={() => navigation.navigate("SignUp")}>
            <Text color={colors.blue[1]} font={fonts.inter[400]} size={15}>
              {" "}
              Create Account
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
