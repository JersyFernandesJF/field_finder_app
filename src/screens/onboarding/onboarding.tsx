import { useNavigation } from "@react-navigation/native";
import { Block, Button, Text } from "~/components";
import { useRef, useState, useEffect } from "react";
import { Animated, Dimensions, FlatList, StyleSheet, } from "react-native";
import { Slide } from "./slide";
import { useTheme } from "~/hooks/theme";

const CARDS = [
  {
    imageSource: require("../../assets/image/onboarding1.png"),
    description: "We provide high quality products just for you",
    id: 1,
  },
  {
    imageSource: require("../../assets/image/onboarding2.png"),
    description: "Your satisfaction is our number one priority",
    id: 2,
  },
  {
    imageSource: require("../../assets/image/onboarding3.png"),
    description: "Let's fulfill your daily needs with Wozzy right now!",
    id: 3,
  },
];

const { width, height } = Dimensions.get("window");

export const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const { colors, fonts } = useTheme();
   
   useEffect(()=>{
    console.log(currentIndex)
   }, currentIndex)

  return (
    <Block style={styles.mainContainer}>
      <FlatList
        data={CARDS}
        renderItem={({ item }) => <Slide imageSource={item.imageSource} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        ref={slidesRef}
      />

      <Block style={styles.content}>
        <Block style={[styles.divider, { backgroundColor: colors.green[1] }]} center>
          <Text>Field Finder</Text>
        </Block>

        <Block>
          <Text style={styles.description}>
            {CARDS[currentIndex].description}
          </Text>
        </Block>

        <Block style={styles.dotsContainer}></Block>
        <Block row>
            <Button>Skip</Button>
            <Button>Right</Button>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  content: {
    backgroundColor: "white",
    position: "absolute",
    top: height - 450,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 38,
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginRight: 6,
    backgroundColor: "white",
  },
  divider: {
    height: 100,
    width: 100,
    borderRadius: 50,
    top: -50,
    alignItems: "center",
  },
});
