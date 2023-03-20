import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";
import { useTheme } from "~/hooks/theme";

type TextProps = RNTextProps & {
  textAlign?: TextStyle["textAlign"];
  color?: TextStyle["color"];
  font?: TextStyle["fontFamily"];
  size?: TextStyle["fontSize"];
  fontSize?: TextStyle["fontSize"];
  textDecorationLine?: TextStyle["textDecorationLine"]
  highlighted?: boolean;
};

export const Text: React.FC<TextProps> = ({
  textAlign,
  color,
  style,
  children,
  font,
  size,
  fontSize,
  highlighted,
  textDecorationLine,
  ...props
}) => {
  const { colors, fonts } = useTheme();

  const textStyles = StyleSheet.flatten([
    textAlign !== undefined && { textAlign },
    textDecorationLine !== undefined && { textDecorationLine },
    color !== undefined && { color },
    font !== undefined && { fontFamily: font },
    (size || fontSize) !== undefined && { fontSize: fontSize || size },
    highlighted !== undefined && {
      color: colors.blue[1],
      textDecorationLine: "underline",
      fontFamily: fonts.inter[400],
      fontSize: 13,
    },
    style,
  ]) as TextStyle;

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};
