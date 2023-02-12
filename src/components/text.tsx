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
  ...props
}) => {
  const { colors, fonts } = useTheme();
  
  const textStyles = StyleSheet.flatten([
    textAlign !== undefined && { textAlign },
    color !== undefined && { color },
    font !== undefined && { fontFamily: font },
    (size || fontSize) !== undefined && { fontSize: fontSize || size },
    highlighted !== undefined && { color:colors.blue[1], textDecorationLine:"underline", fontFamily:fonts.inter[400], fontSize: 13}, 
    style,
  ]) as TextStyle;
   
  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};
