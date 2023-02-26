import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";

type LineProps = {
  children: string;
};

export const Line: React.FC<LineProps> = ({ children }) => {
  const { colors, fonts } = useTheme();

  return (
    <Block row center>
      <Block
        flex={1}
        style={{
          marginRight: 10,
          borderColor: colors.dark[2],
          borderBottomWidth: 1,
        }}
      />
      <Text font={fonts.inter[500]}>{children}</Text>
      <Block
        flex={1}
        style={{
          marginLeft: 10,
          borderColor: colors.dark[2],
          borderBottomWidth: 1,
        }}
      />
    </Block>
  );
};
