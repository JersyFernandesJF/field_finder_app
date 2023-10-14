import { CheckSVGIcon } from "~/assets/icons";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import { PressableProps } from "react-native";

type checkBoxProps = PressableProps & {
  active?: boolean;
};

export const CardInterest: React.FC<checkBoxProps> = ({ active, ...props }) => {
  const { fonts, colors } = useTheme();
  return (
    <Button {...props}>
      <Block row>
        <CheckSVGIcon remember={active} />
        <Block ml={10}>
          <Text size={13} font={fonts.inter[400]} color={colors.dark[1]}>
            Remember me
          </Text>
        </Block>
      </Block>
    </Button>
  );
};
