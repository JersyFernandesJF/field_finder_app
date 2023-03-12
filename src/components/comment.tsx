import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";


type CommentProps = {
   children: string;
}


export const Comment: React.FC<CommentProps> = ({
  children,
  ...props
}) => {
  const { colors, fonts } = useTheme();

  return (
    <Block>
      
    </Block>
  );
};
