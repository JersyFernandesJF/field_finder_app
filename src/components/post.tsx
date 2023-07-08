import { useTheme } from "~/hooks/theme";
import {
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";
import { Block } from "./block";
import { Slide } from "./slide";
import { Text } from "./text";
import { PinSVGIcon } from "~/assets/icons";
import { useRef, useState } from "react";

const CARDS = [
  {
    imageSource: require("../assets/image/onboarding/onboarding1.png"),
    title: "Search and find fields for anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 1,
  },
];

export const Post: React.FC = ({ ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const { colors, fonts } = useTheme();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const container = StyleSheet.flatten({
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "blue",
  });
  return (
    <Block style={container} center>
      <Block>
        <Block flex={1}>
          <FlatList
            data={CARDS}
            renderItem={({ item }) => <Slide imageSource={item.imageSource} />}
            pagingEnabled
            horizontal
            style={{ flex: 1 }}
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
        </Block>
      </Block>
      <Block
        height={200}
        style={{ backgroundColor: "white" }}
        width={Dimensions.get("window").width}
      >
        <Block row>
          <Text>Jersy Fernandes</Text>
          <Text>Melhor jogo que já fui até hoje!</Text>
        </Block>
        <Block>
          <Block>
            <Text>Add a comment</Text>
          </Block>
          <Text>28 minutes ago . See Translation</Text>
        </Block>
      </Block>
    </Block>
  );
};
