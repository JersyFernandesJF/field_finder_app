import { Pressable, PressableProps, StyleSheet } from "react-native";
import { useTheme } from "~/hooks/theme";
import { Text } from "./text";
import { Block } from "./block";
import { Check } from "~/assets/icons";

export type checkBoxProps = {
  children?: string;
};

export const CheckBox: React.FC<checkBoxProps> = ({ children, ...props }) => {
  const { colors, fonts } = useTheme();

  return (
    <Block row>
      <Check />
      <Text style={{ marginLeft: 10 }}>Remember me</Text>
    </Block>
  );
};
