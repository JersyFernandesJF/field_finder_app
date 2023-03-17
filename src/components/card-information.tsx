import { useTheme } from "~/hooks/theme";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Block } from "./block";
import { Text } from "./text";

type CardInformationProps = {
  name: string;
  price: number;
  imageSource: ImageSourcePropType;
  longCard?: boolean;
};

export const CardIformation: React.FC<CardInformationProps> = ({
  name,
  price,
  imageSource,
  longCard,
  ...props
}) => {
  const { colors, fonts } = useTheme();
  const shadow = StyleSheet.flatten({
     shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  })
  const commentStyles = StyleSheet.flatten({
    width: 160,
    height: 190,
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10 
  });
  const longCardStyles = StyleSheet.flatten({
    height: 150,
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 10, 
    marginBottom: 10
  });
  if (longCard) {
    return (
      <Block style={[longCardStyles, shadow]}>
        <Block height={78} row>
            <Image
          source={imageSource}
          style={{ width: 160, height: 110, borderRadius: 10 }}
        />
        <Block justifyContent='space-between' marginLeft={10} height={110}>
            <Block>
                <Text fontSize={14} font={fonts.inter[400]}>{name}</Text> 
            </Block>
            <Block justifyContent='space-between' row >
                <Text>4.9</Text>
                <Text>{price}</Text>
            </Block>
            <Text>33% de desconto</Text>
        </Block>
        </Block>
        
      </Block>
    );
  }
  return (
    <Block style={[commentStyles, shadow]} justifyContent="space-around">
      <Image
        source={imageSource}
        style={{ width: 140, height: 140, borderRadius: 10 }}
      />
      <Block row justifyContent="space-between">
        <Text fontSize={14} font={fonts.inter[600]}>
          {name}
        </Text>
        <Text fontSize={14} color={colors.green[1]} font={fonts.inter[600]}>
          {price}€
        </Text>
      </Block>
    </Block>
  );
};
