import { Block, Button, Text, Input} from "~/components";
import { useTheme } from "~/hooks/theme";
import { EmailIcon } from "~/assets/icons";

export const LoginScreen = ({ navigation }:any) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block>
        <Text
          textAlign="center"
          color={colors.dark[1]}
          font={fonts.inter[400]}
          size={15}
        >
          Email
        </Text>
        <Input placeholder="example@gmail.com"></Input>
        <Text
          textAlign="center"
          color={colors.dark[1]}
          font={fonts.inter[400]}
          size={15}
        >
          Password
        </Text>
        <Input placeholder="example@gmail.com"></Input>
      </Block>

      <Block>
        <Button defaultStyle>Login</Button>
      </Block>

      <Block center my={30}>
        <Block center mt={20} my={12}>
          <Button labelButton>Forgot password?</Button>
        </Block>
        <Block row center>
          <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={15}
          onPress={() => navigation.navigate("SignUpOptions")}
        >
          Don't have an account yet? 
        </Text>
        <Button labelButton  onPress={() => navigation.navigate('SignUpOptions')} center={<Text color={colors.blue[1]}> Create Account</Text>}></Button>
        </Block>
        
      </Block>
    </Block>
  );
};
