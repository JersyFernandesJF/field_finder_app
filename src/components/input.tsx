import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";

export type InputProps = TextInputProps & {
  type?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  password?: boolean;
};

export const Input: React.FC<InputProps> = ({
  left,
  right,
  password,
  ...props
}) => {
  const { colors, fonts } = useTheme();
  const TextInputStyles = StyleSheet.flatten({
    borderWidth: 0.5,
    borderColor: colors.dark[2],
    height: 52,
    borderRadius: 12,
    width: 315,
  });
  const Input = StyleSheet.flatten({
    flex: 1,
  });
  return (
    <Block
      row
      justifyContent="flex-start"
      alignItems="center"
      style={TextInputStyles}
      paddingHorizontal={16}
    >
      {left && left}
      <TextInput secureTextEntry={password} style={Input} {...props} />
      {right && right}
    </Block>
  );
};
