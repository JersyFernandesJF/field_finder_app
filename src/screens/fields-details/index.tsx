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
  View,
} from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { CalendarSvgIcon } from "~/assets/icons";
import { useNavigation, useRoute } from "@react-navigation/native";

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
    <View style={{ backgroundColor: "#ffff", flex: 1}}>
      <ScrollView>
        <View style={{ flex: 1}}>
          <FlatList
            data={params.data.images}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                  accessibilityIgnoresInvertColors
                />
              </View>
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
        </View>
        <View style={{flex:1, marginTop:10}}>
          <View style={styles.dotsContainer}>
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
          </View>
          <View
          style={{ marginTop: 10, justifyContent:"space-around", alignItems:"flex-start", paddingHorizontal: 20}}
          >
            <Text fontSize={18} font={fonts.inter[600]}>
              {params.data.name_field}
            </Text>
            <View style={{ marginVertical: 15}}>
              <View
                style={{ width: "100%", marginVertical: 15, justifyContent:"space-between", flexDirection:"row", marginHorizontal: 5}}
              >
                <Text
                  color={
                    params.data.availability ? colors.green[1] : colors.red[1]
                  }
                >
                  {params.data.availability ? "LIVRE" : "OCUPADO"}
                </Text>
                <View  style={{flexDirection:"row", marginTop:5}}>
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
                </View>
              </View>
              <View
                style={{ width: "100%", justifyContent:"space-between", flexDirection:"row"}}
              >
                <Text fontSize={13} color={colors.orange[1]}>
                  Livre dentro de 30 minitos
                </Text>
                <Text fontSize={13} color={colors.green[2]}>
                  33% de desconto
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 5}}>
          <View style={{ marginTop: 20}}>
            <Button
              onPress={() => navigation.navigate("CreateEvent")}
              row
              left={
                <View style={{ marginRight: 12}}>
                  <CalendarSvgIcon />
                </View>
              }
              defaultStyle
            >
              To Schedule
            </Button>
          </View>
          <View style={{marginVertical: 30}}>
            <View style={{ marginBottom: 10}}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Details
              </Text>
            </View>
            <Text fontSize={13} color={colors.dark[1]}>
              {params.data.fieldsdetails
                ? params.data.fieldsdetails
                : "iweuhnkdsniod"}
            </Text>
          </View>

          <View style={{ marginBottom: 10}}>
            <View style={{ marginBottom: 10}}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Includes
              </Text>
            </View>
            <View>
              {params.data.fieldrules.map((element) => {
                return <Include description={element} />;
              })}
            </View>
          </View>

          <View style={{ marginBottom: 30}}>
            <View style={{ marginBottom: 10}}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Address
              </Text>
            </View>
            <MapView style={styles.map}></MapView>
            <ShareAddress address="Rua dom Afonso Henriques, 655"></ShareAddress>
          </View>

          <View style={{ marginBottom: 30}}>
            <View style={{ marginBottom: 10}}>
              <Text fontSize={16} font={fonts.inter[600]}>
                Ratings
              </Text>
              <View>
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
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
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
