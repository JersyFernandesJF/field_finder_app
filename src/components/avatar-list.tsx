import { useTheme } from "~/hooks/theme";
import { StyleSheet, Image, ImageURISource } from "react-native";
import { Block } from "./block";
import { Text } from "./text";
import { StarSVGIcon } from "~/assets/icons";


type CardInformationProps = {
  data: {
    images: string[];
    name_field: string;
    price: number;
  };
};

export const AvatarList: React.FC<CardInformationProps> = ({
  data,

  ...props
}) => {
  const { colors, fonts } = useTheme();

  const commentStyles = StyleSheet.flatten({
    minWidth: 160,
    height: 190,
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  });

  return (
    <Block style={commentStyles} justifyContent="space-around">
      <Image
        source={{
          uri: `${data.images[0]}`,
        }}
        style={{ width: 140, height: 140, borderRadius: 10 }}
      />
      <Block row justifyContent="space-between">
        <Text fontSize={14} font={fonts.inter[600]}>
          {data.name_field}
        </Text>
        <Text fontSize={14} color={colors.green[1]} font={fonts.inter[500]}>
          {data.price}€
        </Text>
      </Block>
    </Block>
  );
};
