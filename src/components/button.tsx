import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Text } from "./text";
import { Block } from "./block";

type ButtonProps = PressableProps & {
  children?: string | React.ReactNode;
  bordered?: boolean;
  defaultStyle?: boolean;
  chips?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
  row?: boolean;
  my?: ViewStyle["marginVertical"];
  marginVertical?: ViewStyle["marginVertical"];
  roundButton?: Boolean;
  inlineButton?: Boolean;
  toggleButton?: Boolean;
  active?: Boolean;
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
  roundButton,
  inlineButton,
  chips,
  toggleButton,
  active = false,
  ...props
}) => {
  const { colors, fonts } = useTheme();

  const buttonStyles = StyleSheet.flatten([
    toggleButton !== undefined && {
      backgroundColor: active ? colors.green[1] : colors.white,
      height: 26,
      borderRadius: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    chips !== undefined && {
      height: 26,
      minWidth: 74,
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: "center",
      borderRadius: 20,
      alignItems: "center",
      marginHorizontal: 2,
    },
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
    roundButton !== undefined && {
      height: 70,
      width: 70,
      borderRadius: 35,
      backgroundColor: colors.green[1],
      justifyContent: "center",
      alignItems: "center",
    },
    inlineButton !== undefined && {
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 12,
      borderColor: colors.green[1],
      height: 52,
      width: 125,
      justifyContent: "center",
      alignItems: "center",
    },
    style,
  ]) as ViewStyle;

  const textStyles = defaultStyle && {
    color: colors.white,
    fontFamily: fonts.inter[500],
    fontSize: 14,
  };

  return (
    <Pressable style={buttonStyles} {...props}>
      <Block row>
        {left && left}
        {typeof children === "string" ? (
          <Text style={textStyles}>{children}</Text>
        ) : (
          children
        )}
        {right && right}
      </Block>
    </Pressable>
  );
};
