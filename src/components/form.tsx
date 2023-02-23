import { Block } from "./block";
import { Text } from "./text";
import { Input } from "./input";
import { useTheme } from "~/hooks/theme";


type FormProps = {
    children?: string;
    left?: JSX.Element;
    right?: JSX.Element;
    password?: boolean;
    placeholder?: string;

}
export const Form: React.FC<FormProps> =({
    children,
    left, 
    right,
    password,
    placeholder,
})=>{
    const { colors, fonts } = useTheme();  
    return (
    
        <Block justifyContent="flex-start" alignItems="flex-start">
          <Block marginTop={30} justifyContent="flex-start" alignItems="flex-start">
          <Text
            textAlign="center"
            color={colors.dark[1]}
            font={fonts.inter[400]}
            size={15}
          >
            {children}
        </Text>
        <Input password={password} placeholder={placeholder} right={right} left={left}></Input>
         </Block> 
         </Block> 

    );
  };