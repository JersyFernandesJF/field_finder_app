import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Block, Button, Text } from "~/components";
import { useRef, useState, useEffect } from "react";
import { Animated, Dimensions, FlatList, StyleSheet } from "react-native";
import { Slide } from "./slide";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { RightSvgIcon } from "~/assets/icons";

const CARDS = [
  {
    imageSource: require("../../assets/image/onboarding1.png"),
    title: "Search and find fields for anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 1,
  },
  {
    imageSource: require("../../assets/image/onboarding2.png"),
    title: "Find people to practice sports with you",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 2,
  },
  {
    imageSource: require("../../assets/image/onboarding3.png"),
    title: "Search and find fields for anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 3,
  },
];

const { width, height } = Dimensions.get("window");

type Props = NativeStackScreenProps<MainStackParamsList, "Onboarding">;

export const OnboardingScreen = ({ navigation }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const { colors, fonts } = useTheme();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const skipSlide = () => {
    navigation.navigate("SignUpOptions");
  };

  const handleGoToNextSlide = () => {
    if (currentIndex === 2) {
      navigation.navigate("SignUpOptions");

      return;
    }

    if (!slidesRef.current) {
      return;
    }

    slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
  };

  return (
    <Block style={styles.mainContainer}>
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
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Block style={styles.content}>
        <Block
          style={[styles.divider, { backgroundColor: colors.green[1] }]}
          center
        >
          <Text color={"white"} font={fonts.inter[600]} fontSize={11}>
            Field Finder
          </Text>
        </Block>

        <Block>
          <Text
            textAlign="center"
            fontSize={22}
            color={colors.green[1]}
            font={fonts.inter[600]}
            style={styles.description}
          >
            {CARDS[currentIndex].title}
          </Text>
          <Text
            textAlign="center"
            fontSize={15}
            color={colors.dark[1]}
            font={fonts.inter[400]}
            style={styles.description}
          >
            {CARDS[currentIndex].description}
          </Text>
        </Block>

        <Block style={styles.dotsContainer}>
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
                  style={[
                    styles.dot,
                    {
                      width: dotWidth,
                      opacity,
                      backgroundColor: colors.green[1],
                    },
                  ]}
                  key={index.toString()}
                />
              );
            })}
        </Block>

        <Block
          row
          my={60}
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Button onPress={skipSlide}>
            <Text fontSize={15} font={fonts.inter[400]} color={colors.green[1]}>
              Skip
            </Text>
          </Button>

          <Block marginRight={50} />
          <Button roundButton={true} onPress={handleGoToNextSlide}>
            <RightSvgIcon />
          </Button>
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
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    width: 300,
    marginVertical: 10,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    marginRight: 6,
  },
  divider: {
    height: 100,
    width: 100,
    borderRadius: 50,
    top: -50,
    alignItems: "center",
  },
});
