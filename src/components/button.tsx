import { Pressable, PressableProps, StyleSheet } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Text } from "./text";

export type ButtonProps = PressableProps & {
  children?: string;
  buttonColor?: string;
  socialButton?: boolean;
  defaultStyle?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonColor,
  socialButton,
  defaultStyle,
  style,
  ...props
}) => {
  const { colors, fonts } = useTheme();

  const buttonStyles = StyleSheet.flatten([
    socialButton !== undefined && {
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 12,
      borderColor: colors.dark[2],
      backgroundColor: colors.white,
      height: 52,
      justifyContent: "center",
      alignItems: "center",
    },
    defaultStyle !== undefined && {
      backgroundColor: colors.green[1],
      borderRadius: 12,
      height: 52,
      justifyContent: "center",
      alignItems: "center",
    },

    style,
  ]) as PressableProps;

  if (socialButton) {
    return (
      <Pressable style={buttonStyles} {...props}>
        <Text color={colors.blue[10]} font={fonts.inter[400]} size={15}>
          {children}
        </Text>
      </Pressable>
    );
  }

  if (defaultStyle) {
    return (
      <Pressable style={buttonStyles} {...props}>
        <Text color={colors.white} font={fonts.inter[500]} size={15}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable style={buttonStyles} {...props}>
      <Text color={buttonColor}>{children}</Text>
    </Pressable>
  );
};
