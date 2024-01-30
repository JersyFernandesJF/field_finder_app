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
  longCard?: boolean;
};

export const CardIformation: React.FC<CardInformationProps> = ({
  data,
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
  });
  const commentStyles = StyleSheet.flatten({
    minWidth: 160,
    height: 190,
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  });
  const longCardStyles = StyleSheet.flatten({
    height: 140,
    minWidth: 350,
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  });
  if (longCard) {
    return (
      <Block row style={[longCardStyles, shadow]} center>
        <Image
          source={{
            uri: `${data.images[0]}`,
          }}
          style={{ width: 160, height: 110, borderRadius: 10 }}
        />
        <Block
          justifyContent="space-between"
          marginLeft={10}
          height={110}
          style={{ minWidth: 140 }}
          flex={1}
          py={10}
        >
          <Block>
            <Text fontSize={15} font={fonts.inter[400]}>
              {data.name_field}
            </Text>
          </Block>
          <Block justifyContent="space-between" row>
            <Block row center>
              <StarSVGIcon />
              <Block ml={5}>
                <Text fontSize={12} color={colors.green[1]}>
                  4.9
                </Text>
              </Block>

              <Text fontSize={12} color={colors.dark[1]}>
                {" "}
                (277)
              </Text>
            </Block>

            <Text fontSize={15} font={fonts.inter[500]} color={colors.green[1]}>
              {data.price}€
            </Text>
          </Block>
          <Block alignItems="flex-end">
            <Text fontSize={14} color={colors.green[2]}>
              33% de desconto
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }
  return (
    <Block style={[commentStyles, shadow]} justifyContent="space-around">
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
