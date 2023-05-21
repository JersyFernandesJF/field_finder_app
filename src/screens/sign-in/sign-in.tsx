import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EmailSVGIcon, EyeSVGIcon } from "~/assets/icons";
import { Block, Button, CheckBox, InputFormField, Text } from "~/components";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";
import { Alert } from "react-native";

type Props = NativeStackScreenProps<MainStackParamsList, "SignIn">;

export const SignInScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function Sigin() {
    try {
      await signIn(email, password)
        .then((credential) => {
          const { user } = credential;
          Alert.alert(user.uid);
          navigation.navigate("HomeTabs");
        })
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
        });
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block>
        <InputFormField
          standard
          left={<EmailSVGIcon style={{ marginRight: 10 }} />}
          placeholder="Email"
          label="Email"
          onChangeText={setEmail}
        />
        <Block mt={10}>
          <InputFormField
            standard
            right={
              <EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />
            }
            placeholder="Password"
            label="Password"
            onChangeText={setPassword}
          />
        </Block>
        <Block my={10}>
          <CheckBox />
        </Block>
      </Block>
      <Block>
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
