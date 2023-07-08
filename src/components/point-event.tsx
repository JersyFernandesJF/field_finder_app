import { useTheme } from "~/hooks/theme";
import { StyleSheet } from "react-native";
import { Block } from "./block";
import { PinSVGIcon } from "~/assets/icons";

export const PointEvent: React.FC = ({ ...props }) => {
  const { colors, fonts } = useTheme();

  const container = StyleSheet.flatten({
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  });
  return (
    <Block style={container} center>
      <PinSVGIcon color={colors.red[1]} />
    </Block>
  );
};
