import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";
import { CheckIncludeSvgIcon } from "~/assets/icons";

type IncludProps = {
  description: string;
};

export const Include: React.FC<IncludProps> = ({ description, ...props }) => {
  const { colors, fonts } = useTheme();
  return (
    <Block mt={20} center row>
      <CheckIncludeSvgIcon />
      <Block marginHorizontal={20}>
        <Text fontSize={13} color={colors.dark[1]}>
          {description}
        </Text>
      </Block>
    </Block>
  );
};
