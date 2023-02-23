import { Block } from "./block";
import { Text } from "./text";
import { useTheme } from "~/hooks/theme";

type LineProps = {
  children: string;
};

export const Line: React.FC<LineProps> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Block row center>
      <Block
        flex={1}
        style={{
          marginRight: 10,
          borderColor: colors.dark[2],
          borderBottomWidth: 1,
        }}
      ></Block>
      <Text fontSize={17}>{children}</Text>
      <Block
        flex={1}
        style={{
          marginLeft: 10,
          borderColor: colors.dark[2],
          borderBottomWidth: 1,
        }}
      ></Block>
    </Block>
  );
};
