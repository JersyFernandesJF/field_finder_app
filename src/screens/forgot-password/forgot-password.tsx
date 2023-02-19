import { Block, Button, Text, Input, CheckBox} from "~/components";
import { useTheme } from "~/hooks/theme";
import { EmailIConTextIput, EyeIcon } from "~/assets/icons";

export const ForgotPasswordScreen = ({ navigation }:any) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} px={30}>
        <Block>
        <Text fontSize={22}   font={fonts.inter[400]} textAlign='center'>Please enter your Registered email ID</Text>
      </Block> 
      <Block my={30}>
       <Text textAlign='center' color={colors.dark[1]}>We will send a verification code to your registered email ID</Text>
   </Block>  
    <Block>
        <Block my={30} justifyContent="flex-start" alignItems="flex-start">
        <Text
          textAlign="center"
          font={fonts.inter[400]}
          size={15}
        >
          Email
        </Text>
        <Input placeholder="example@gmail.com" left={<EmailIConTextIput style={{ marginRight:10 }} />}></Input>
       </Block> 
      </Block>
      <Block my={50}>
        <Button defaultStyle>Send instruction</Button>
      </Block>
      
    </Block>
  );
};
