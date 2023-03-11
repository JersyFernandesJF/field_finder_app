import { useNavigation } from "@react-navigation/native";
import { Button, Typography, View } from "design-system-mobile";
import { useRef, useState } from "react";
import { Animated, Dimensions, FlatList, StyleSheet } from "react-native";
import { OnboardingScreenProps } from "src/routes/main-stack";
import { colors } from "theme";

import { Slide } from "./slide";

const CARDS = [
  {
    imageSource: require("../../assets/images/onboarding1.png"),
    description: "We provide high quality products just for you",
    id: 1,
  },
  {
    imageSource: require("../../assets/images/onboarding2.png"),
    description: "Your satisfaction is our number one priority",
    id: 2,
  },
  {
    imageSource: require("../../assets/images/onboarding3.png"),
    description: "Let's fulfill your daily needs with Wozzy right now!",
    id: 3,
  },
];

const { width, height } = Dimensions.get("window");

type OnboardingNavigationProps = OnboardingScreenProps["navigation"];

export const OnboardingScreen = () => {
  const { navigate } = useNavigation<OnboardingNavigationProps>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleGoToNextSlide = () => {
    if (currentIndex === 2) {
      navigate("GetIn");

      return;
    }

    if (!slidesRef.current) {
      return;
    }

    slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={CARDS}
        renderItem={({ item }) => <Slide imageSource={item.imageSource} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      
      <View style={styles.content}>
        <View>
          <Typography
            weight="bold"
            variant="heading2"
            style={styles.description}
          >
            {CARDS[currentIndex].description}
          </Typography>
        </View>

        <View style={styles.dotsContainer}>
          {Array(3)
            .fill(1)
            .map((_, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];

              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [8, 32, 8],
                extrapolate: "clamp",
              });

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  style={[styles.dot, { width: dotWidth, opacity }]}
                  key={index.toString()}
                />
              );
            })}
        </View>

        <Button onPress={() => handleGoToNextSlide()}>
          {currentIndex === 2 ? "Get Stared" : "Continue"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.others.white,
    position: "absolute",
    top: height - 350,
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 24,
    justifyContent: "space-evenly",
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
    backgroundColor: colors.others.black,
  },
});