import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Input } from "./input";
import { Text } from "./text";
import { useState } from "react";
import { EyeSVGIcon, BlindEyeSVGIcon } from "~/assets/icons";

type InputFormFieldPassword = React.ComponentProps<typeof Input> & {
  label?: string;
};
export const InputFormFieldPassword: React.FC<InputFormFieldPassword> = ({
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const { colors, fonts } = useTheme();

  const renderIcon = () => {
    return showPassword ? (
      <EyeSVGIcon onPress={() => setShowPassword(!showPassword)} />
    ) : (
      <BlindEyeSVGIcon onPress={() => setShowPassword(!showPassword)} />
    );
  };
  return (
    <Block>
      <Block style={{ marginBottom: 10 }}>
        <Text
          textAlign="left"
          color={colors.blue[10]}
          font={fonts.inter[500]}
          size={15}
        >
          {label}
        </Text>
      </Block>
      <Input {...props} right={renderIcon()} security={showPassword} />
    </Block>
  );
};
