import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

type TextProps = RNTextProps & {
  textAlign?: TextStyle["textAlign"];
  color?: TextStyle["color"];
  font?: TextStyle["fontFamily"];
  size?: TextStyle["fontSize"];
  fontSize?: TextStyle["fontSize"];
};

export const Text: React.FC<TextProps> = ({
  textAlign,
  color,
  style,
  children,
  font,
  size,
  fontSize,
  ...props
}) => {
  const textStyles = StyleSheet.flatten([
    textAlign !== undefined && { textAlign },
    color !== undefined && { color },
    font !== undefined && { fontFamily: font },
    (size || fontSize) !== undefined && { fontSize: fontSize || size },
    style,
  ]) as TextStyle;

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};
