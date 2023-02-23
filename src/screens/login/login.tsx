import { Block, Button, Text, Input, CheckBox, Form} from "~/components";
import { useTheme } from "~/hooks/theme";
import { EmailIConTextIput, EyeIcon } from "~/assets/icons";
import { useState } from "react";

export const LoginScreen = ({ navigation }:any) => {
  const { colors, fonts } = useTheme();
  const [showPassword, setShowPassword] = useState(true)

  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block justifyContent="flex-start" alignItems="flex-start">
           <Form left={<EmailIConTextIput style={{ marginRight:10 }} />} placeholder="Email">Email</Form>
       <Block justifyContent="flex-start" alignItems="flex-start">
           <Form password={showPassword} right={<EyeIcon onPress={()=> setShowPassword(!showPassword)} style={{ marginRigtht:10}}/>} placeholder="Password">Password</Form>
        </Block>
         <Block my={10}>
            <CheckBox/>
         </Block>
      </Block>

      <Block>
       <Button defaultStyle onPress={() => navigation.navigate("MainOption")}>Login</Button>
      </Block>

      <Block center my={30}>
        <Block center mt={20} my={12}>
          <Button  onPress={() => navigation.navigate("ForgotOption")} labelButton center={<Text color={colors.blue[1]}>Forgot password?</Text>}></Button>
        </Block>
        <Block row center>
          <Text
          textAlign="center"
          color={colors.blue[10]}
          font={fonts.inter[400]}
          size={15}
          onPress={() => navigation.navigate("SignUpOption")}
        >
          Don't have an account yet? 
        </Text>
        <Button labelButton  onPress={() => navigation.navigate('SignUpOption')} center={<Text color={colors.blue[1]}> Create Account</Text>}></Button>
        </Block>
        
      </Block>
    </Block>
  );
};
