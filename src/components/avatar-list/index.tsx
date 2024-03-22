
import { Image } from "react-native";

import { Block } from "../block";
import { Text } from "../text";
import { styles } from "./styles";
import { CardInformationProps } from "./avatar";


export const AvatarList: React.FC<CardInformationProps> = ({
  data
}) => {

  return (

    <Block style={styles.comment} justifyContent="space-around">
      <Image
        source={{ uri: `${data.images[0]}` }}
        style={styles.image}
      />
      <Block row justifyContent="space-between">
        <Text style={styles.price}>
          {data.name_field}
        </Text>
        <Text style={styles.price}>
          {data.price}€
        </Text>
      </Block>
    </Block>
  );
};
