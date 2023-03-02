import { CheckSVGIcon } from "~/assets/icons";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";

type checkBoxProps = {
  children?: string;
};

export const CheckBox: React.FC<checkBoxProps> = ({}) => {
  const { fonts, colors } = useTheme();
  return (
    <Block row>
      <CheckSVGIcon />
      <Block ml={10}>
        <Text size={13} font={fonts.inter[400]} color={colors.dark[1]}>
          Remember me
        </Text>
      </Block>
    </Block>
  );
};
