import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Input } from "./input";
import { Text } from "./text";
import { useState } from "react";

type InputFormField = React.ComponentProps<typeof Input> & {
  label?: string;
};
export const InputFormField: React.FC<InputFormField> = ({
  label,
  ...props
}) => {
  const { colors, fonts } = useTheme();
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
      <Input {...props} />
    </Block>
  );
};
