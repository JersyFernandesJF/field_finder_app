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
};

export const Input: React.FC<InputProps> = ({
  left,
  standard,
  right,
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
      alignItems: "center",
      borderRadius: 12,
      paddingHorizontal: 16,
    } as ViewStyle);

  return (
    <Block row style={boxStyles}>
      {left && left}
      <TextInput
        style={textInputStyles}
        {...props}
        placeholderTextColor={colors.dark[3]}
      />
      {right && right}
    </Block>
  );
};
