import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Block,
  Button,
  Text,
  Comment,
  Include,
  Slide,
  ShareAddress,
} from "~/components";
import { useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { CalendarSvgIcon } from "~/assets/icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const CARDS = [
  {
    imageSource: require("../../assets/image/onboarding/onboarding1.png"),
    title: "Search and find fields for anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 1,
  },
  {
    imageSource: require("../../assets/image/onboarding/onboarding2.png"),
    title: "Find people to practice sports with you",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 2,
  },
  {
    imageSource: require("../../assets/image/onboarding/onboarding3.png"),
    title: "Search and find fields for anywhere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    id: 3,
  },
];

const { width, height } = Dimensions.get("window");

type Props = NativeStackScreenProps<MainStackParamsList, "FieldsDetails">;

export const FieldsDetailsScreen = () => {
  const navigation = useNavigation<Props["navigation"]>();
  const { params } = useRoute<Props["route"]>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const { colors, fonts } = useTheme();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Block flex={1} style={{ backgroundColor: "#ffff" }}>
      <ScrollView>
        <Block flex={1}>
          <FlatList
            data={params.data.images}
            renderItem={({ item }) => (
              <Block style={styles.container}>
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                  accessibilityIgnoresInvertColors
                />
              </Block>
            )}
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
        </Block>
        <Block flex={1} marginTop={10}>
          <Block style={styles.dotsContainer}>
            {params.data.images.map((_, index) => {
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
            marginTop={10}
            justifyContent="space-around"
            alignItems="flex-start"
            paddingHorizontal={20}
          >
            <Text fontSize={18} font={fonts.inter[600]}>
              {params.data.name ? params.data.name : "jdsjdsk"}
            </Text>
            <Block my={15}>
              <Block
                my={5}
                row
                justifyContent="space-between"
                style={{ width: "100%" }}
              >
                <Text
                  color={
                    params.data.availability ? colors.green[1] : colors.red[1]
                  }
                >
                  {params.data.availability ? "LIVRE" : "OCUPADO"}
                </Text>
                <Block row marginTop={5}>
                  <Text
                    textDecorationLine="line-through"
                    fontSize={14}
                    color={colors.dark[1]}
                  >
                    {params.data.price ? params.data.price : 34}€
                  </Text>
                  <Block marginHorizontal={5} />
                  <Text fontSize={14} color={colors.green[1]}>
                    {params.data.price ? params.data.price : 37}€
                  </Text>
                </Block>
              </Block>
              <Block
                row
                justifyContent="space-between"
                style={{ width: "100%" }}
              >
                <Text fontSize={13} color={colors.orange[1]}>
                  Livre dentro de 30 minitos
                </Text>
                <Text fontSize={13} color={colors.green[2]}>
                  33% de desconto
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block px={30}>
          <Block marginTop={30}>
            <Button
              onPress={() => navigation.navigate("CreateEvent")}
              row
              left={
                <Block marginRight={12}>
                  <CalendarSvgIcon />
                </Block>
              }
              defaultStyle
            >
              To Schedule
            </Button>
          </Block>
          <Block marginVertical={30}>
            <Block mb={10}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Details
              </Text>
            </Block>
            <Text fontSize={13} color={colors.dark[1]}>
              {params.data.fieldsdetails
                ? params.data.fieldsdetails
                : "iweuhnkdsniod"}
            </Text>
          </Block>

          <Block mb={30}>
            <Block mb={10}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Includes
              </Text>
            </Block>
            <Block>
              {params.data.fieldrules.map((element) => {
                return <Include description={element} />;
              })}
            </Block>
          </Block>

          <Block mb={30}>
            <Block mb={10}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Address
              </Text>
            </Block>
            <MapView style={styles.map}></MapView>
            <ShareAddress address="Rua dom Afonso Henriques, 655"></ShareAddress>
          </Block>

          <Block mb={30}>
            <Block mb={10}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Ratings
              </Text>
              <Block>
                {Array(3)
                  .fill(1)
                  .map((_, index) => {
                    return (
                      <Comment
                        name="João Amadeu"
                        comment="Velit officia consequat duis enim velit mollit. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt
        nostrud amet."
                      />
                    );
                  })}
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
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
  map: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  container: { width, height },
  image: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
