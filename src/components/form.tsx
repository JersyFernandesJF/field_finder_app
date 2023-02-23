import { Block } from "./block";
import { Text } from "./text";
import { Input } from "./input";
import { useTheme } from "~/hooks/theme";

type InputFormProps = {
  left?: JSX.Element;
  right?: JSX.Element;
  password?: boolean;
  placeholder?: string;
  label?: string;
};
export const InputForm: React.FC<InputFormProps> = ({
  left,
  right,
  password,
  label,
  placeholder,
}) => {
  const { colors, fonts } = useTheme();
  return (
    <Block justifyContent="flex-start" alignItems="flex-start">
      <Block marginTop={30} justifyContent="flex-start" alignItems="flex-start">
       <Block style={{marginBottom:10}}>
        <Text
          textAlign="center"
          color={colors.dark[1]}
          font={fonts.inter[400]}
          size={15}
          
        >
          {label}
        </Text>
        </Block>
        <Input
          password={password}
          placeholder={placeholder}
          right={right}
          left={left}
        ></Input>
      </Block>
    </Block>
  );
};
