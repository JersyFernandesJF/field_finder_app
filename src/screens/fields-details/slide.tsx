import { Block } from "~/components";
import type { ImageSourcePropType } from "react-native";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

type SlideProps = {
  imageSource: ImageSourcePropType;
};

export const Slide = ({ imageSource }: SlideProps) => (
  <Block style={styles.container}>
    <Image
      source={imageSource}
      style={styles.image}
      accessibilityIgnoresInvertColors
    />
  </Block>
);

const styles = StyleSheet.create({
  container: { width, height },
  image: {
    backgroundColor: "white",
    width,
    height: 335
  },
});
