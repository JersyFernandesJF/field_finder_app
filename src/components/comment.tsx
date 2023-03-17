import { useTheme } from "~/hooks/theme";
import {
  StyleSheet,
} from "react-native";
import { Block } from "./block";
import { Text } from "./text";

type CommentProps = {
  name: string;
  comment: string;
};

export const Comment: React.FC<CommentProps> = ({ name ,comment, ...props }) => {
  const { colors, fonts } = useTheme();
  const commentStyles = StyleSheet.flatten({
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark[2]


  })
  return (
    <Block mt={20} style={commentStyles}>
      <Block row mb={10}>
        <Block>
         <Text fontSize={14} font={fonts.inter[600]}>{name}</Text>
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
