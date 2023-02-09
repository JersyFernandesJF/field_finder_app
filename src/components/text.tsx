import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

type TextProps = RNTextProps & {};

export const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
  const textStyles = StyleSheet.flatten([style]) as TextStyle;

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};
