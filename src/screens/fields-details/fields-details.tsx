import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Block, Button, Text } from "~/components";
import { useRef, useState } from "react";
import { Animated, Dimensions, FlatList, StyleSheet } from "react-native";
import { Slide } from "./slide";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";

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

type Props = NativeStackScreenProps<MainStackParamsList, "FieldsDetails">;

export const FieldsDetailsScreen = ({ navigation }: Props) => {
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

  return (
    <Block flex={1}>
      <FlatList
        data={CARDS}
        renderItem={({ item }) => <Slide imageSource={item.imageSource} />}
        pagingEnabled
        horizontal
        style={{ flex: 1, height: 335 }}
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
      <Block flex={1} marginTop={-130}>
        <Block style={styles.dotsContainer}>
          {Array(CARDS.length)
            .fill(1)
            .map((_, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];

              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [5, 5, 5],
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
          my={20}
          justifyContent="space-around"
          alignItems="flex-start"
          paddingHorizontal={20}
        >
          <Text fontSize={16} font={fonts.inter[600]}>
            Quadra Municipal do Rio Tinto
          </Text>
          <Block my={15}>
            <Block
              my={5}
              row
              justifyContent="space-between"
              style={{ width: "100%" }}
            >
              <Text>OCUPADO</Text>
              <Block row>
                <Text color={colors.dark[1]}>75€</Text>
                <Block marginHorizontal={5} />
                <Text color={colors.green[1]}>25€</Text>
              </Block>
            </Block>
            <Block row justifyContent="space-between" style={{ width: "100%" }}>
              <Text>Livre dentro de 30 minitos</Text>
              <Text color={colors.green[2]}>33% de desconto</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
});