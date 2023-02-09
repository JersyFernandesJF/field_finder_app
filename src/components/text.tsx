import { TextProps as RNTextProps, StyleSheet, TextStyle } from "react-native";

type TextProps = RNTextProps & {};

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const textStyles = StyleSheet.flatten([style]) as TextStyle;

  return <Text style={textStyles} {...props} />;
};
