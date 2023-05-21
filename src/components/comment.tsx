import { useTheme } from "~/hooks/theme";
import { StyleSheet, Image } from "react-native";
import { Block } from "./block";
import { Text } from "./text";

type CommentProps = {
  name: string;
  comment: string;
};

export const Comment: React.FC<CommentProps> = ({
  name,
  comment,
  ...props
}) => {
  const { colors, fonts } = useTheme();
  const commentStyles = StyleSheet.flatten({
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark[2],
  });
  return (
    <Block mt={20} style={commentStyles}>
      <Block row mb={10} alignItems="center">
        <Block marginRight={10}>
          <Image source={require("../assets/image/user/example.png")} />
        </Block>
        <Block>
          <Block>
            <Text fontSize={14} font={fonts.inter[600]}>
              {name}
            </Text>
          </Block>
          <Block height={20}></Block>
        </Block>
      </Block>
      <Block mb={20}>
        <Text color={colors.dark[1]} textAlign="auto">
          {comment}
        </Text>
      </Block>
    </Block>
  );
};
