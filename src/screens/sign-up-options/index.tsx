import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, StatusBar, Alert, View } from "react-native";
import {
  AppleSVGIcon,
  EmailWhiteSVGIcon,
  FacebookSVGIcon,
  GoogleSVGIcon,
} from "~/assets/icons";
import { Block, Button, Line } from "~/components";
import { Text } from "~/components/text";
import { useTheme } from "~/hooks/theme";
import { useAuth } from "~/config/firebase/Providers/AuthProvider";
import { MainStackParamsList } from "~/router";
import {
  signInWithCredential,
  AuthCredential,
  UserCredential,
} from "firebase/auth";

type Props = NativeStackScreenProps<MainStackParamsList, "SignUpOptions">;

export const SignUpOptionsScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();
  const { sigInWithApple } = useAuth();

  async function SigInWithGoogle() {
    sigInWithApple()
      .then((userCredential: UserCredential) => {
        console.log("Login com Apple bem-sucedido:", userCredential);
      })
      .catch((error) => {
        console.error("Erro ao fazer login com Apple:", error);
      });
  }
  return (
    <View
    style={{ flex: 1,justifyContent: "space-between", paddingVertical: 30, paddingHorizontal:Platform.OS === "android" ? 30 : 30}}
    >
      <StatusBar barStyle={"dark-content"} />

      <Text
        textAlign="center"
        color={colors.dark[1]}
        font={fonts.inter[400]}
        size={15}
      >
        Choose a way to create an account and browse all of resources
      </Text>

      <View style={{alignItems: "center", justifyContent:"center"}}>
        {[
          { icon: GoogleSVGIcon, label: "Continue with Google" },
          { icon: AppleSVGIcon, label: "Continue with Apple", separate: true },
          { icon: FacebookSVGIcon, label: "Continue with Facebook" },
        ].map(({ label, icon: Icon, separate }, idx) => (
          <Button
            key={"icon" + idx}
            row
            bordered
            onPress={() => SigInWithGoogle()}
            my={separate ? 15 : undefined}
            left={
              <View style={{ marginRight:30}}>
                <Icon />
              </View>
            }
          >
            <View style={{ flex:1, marginRight:30, alignItems:"center",justifyContent:"center"}}>
              <Text>{label}</Text>
            </View>
          </Button>
        ))}
      </View>

      <Line>or</Line>

      <View>
        <Button
          row
          left={
            <View style={{ marginRight: 12, flexDirection:"row"}}>
              <EmailWhiteSVGIcon />
            </View>
          }
          defaultStyle
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up with Email
        </Button>
        <View style={{ alignItems:"center", justifyContent:"center", flexDirection: "row", marginTop: 20}}>
          <Text color={colors.blue[10]} font={fonts.inter[400]} size={15}>
            Already have an Account?{" "}
          </Text>
          <Button onPress={() => navigation.navigate("SignIn")}>
            <Text color={colors.blue[1]} fontSize={15} font={fonts.inter[600]}>
              {" "}
              Log In
            </Text>
          </Button>
        </View>
      </View>

      <View style={{ alignItems: 'center', justifyContent:"center"}}>
        <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={13}
        >
          By using the app, I agree to The Sports{" "}
          <Text color={colors.blue[1]} font={fonts.inter[400]} size={13}>
            Terms of {`\n`} Service{" "}
          </Text>
          and{" "}
          <Text color={colors.blue[1]} font={fonts.inter[400]} size={13}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};
