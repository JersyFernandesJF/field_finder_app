import { PressableProps, ViewStyle } from "react-native";

export type ButtonProps = PressableProps & {
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