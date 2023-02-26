import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Text } from "./text";

export type ButtonProps = PressableProps & {
  children?: string | React.ReactNode;
  bordered?: boolean;
  defaultStyle?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
  row?: boolean;
  my?: ViewStyle["marginVertical"];
  marginVertical?: ViewStyle["marginVertical"];
};

export const Button: React.FC<ButtonProps> = ({
  children,
  bordered,
  defaultStyle,
  style,
  left,
  right,
  row,
  my,
  marginVertical,
  ...props
}) => {
  const { colors, fonts } = useTheme();

  const buttonStyles = StyleSheet.flatten([
    bordered !== undefined && {
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
    row !== undefined && {
      flexDirection: "row",
    },
    (my || marginVertical) !== undefined && {
      marginVertical: marginVertical ?? my,
    },
    style,
  ]) as PressableProps;

  const textStyles = defaultStyle && {
    color: colors.white,
    fontFamily: fonts.inter[500],
    fontSize: 14,
  };

  return (
    <Pressable style={buttonStyles} {...props}>
      {left && left}
      {typeof children === "string" ? (
        <Text style={textStyles}>{children}</Text>
      ) : (
        children
      )}
      {right && right}
    </Pressable>
  );
};
