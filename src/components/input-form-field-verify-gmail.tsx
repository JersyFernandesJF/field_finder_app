import React, { useState } from "react";
import { TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";

type InputProps = TextInputProps & {};

export const InputVerifyGmail: React.FC<InputProps> = ({ ...props }) => {
  const { colors } = useTheme();

  const boxStyles = {
    borderWidth: 0.5,
    borderColor: colors.dark[2],
    backgroundColor: colors.white,
    alignItems: "center",
    borderRadius: 12,
    justifyContent: "center",
    height: 52,
    width: 65,
  } as ViewStyle;

  return (
    <Block row style={boxStyles}>
      <TextInput
        keyboardType={"numeric"}
        {...props}
        placeholderTextColor={colors.dark[3]}
      />
    </Block>
  );
};
