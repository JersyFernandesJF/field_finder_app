import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";

type InputProps = TextInputProps & {
  left?: JSX.Element;
  right?: JSX.Element;
  justifyContent?: TextStyle["justifyContent"];
  standard?: boolean;
  number?: boolean;
  search?: boolean;
  security?: boolean;
  wrong?: boolean;
};

export const Input: React.FC<InputProps> = ({
  left,
  standard,
  right,
  number,
  security,
  ...props
}) => {
  const { colors } = useTheme();

  const textInputStyles = StyleSheet.flatten([
    standard !== undefined && {
      height: 52,
    },
    { flex: 1 },
  ]) as TextStyle;

  const boxStyles =
    standard &&
    ({
      borderWidth: 0.5,
      borderColor: colors.dark[2],
      backgroundColor: colors.white,
      alignItems: "center",
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 52,
      maxWidth: 365,
    } as ViewStyle);

  return (
    <Block row style={boxStyles}>
      {left && left}
      <TextInput
        secureTextEntry={security}
        keyboardType={number ? "numeric" : "default"}
        style={textInputStyles}
        {...props}
        placeholderTextColor={colors.dark[3]}
      />
      {right && right}
    </Block>
  );
};
