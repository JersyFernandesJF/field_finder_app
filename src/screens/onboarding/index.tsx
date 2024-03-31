import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Slide } from "~/components";
import { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Platform,
  View
} from "react-native";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";
import { RightSvgIcon } from "~/assets/icons";
import { StatusBar } from "react-native";



const CARDS = [
  {
    imageSource: require("../../assets/image/onboarding/onboarding2.jpg"),
    title: "Encontre o seu desporto e pratique ao máximo!",
    description:
      "A vida é um presente, explore seus limites e descubra sua paixão pelo esporte, encontre seu desporto e comece a viver ao máximo!",
    id: 1,
  },
  {
    imageSource: require("../../assets/image/onboarding/onboarding1.jpg"),
    title: "Encontre pessoas para praticar consigo!",
    description:
      "O esporte é feito para ser compartilhado! Encontre camaradas de equipe, treinadores e amigos para superar limites, alcançar objetivos e construir amizades duradouras, descubra seus parceiros de esporte.",
    id: 2,
  },
  {
    imageSource: require("../../assets/image/onboarding/onboarding3.jpg"),
    title: "Encontre locais para poder praticar!",
    description:
      "Não deixe que a falta de locais impeça você de alcançar seus sonhos esportivos! Descubra novos lugares para treinar, jogar e competir, encontre o campo, quadra ou ginásio perfeito para levar suas habilidades esportivas ao próximo nível.",
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
    <View style={styles.container}>
      <View style={styles.imageContent}>
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
      </View>
      <View style={styles.content}>
        <View
          style={[styles.divider, { backgroundColor: colors.green[1] }]}
        >
          <Text color={"white"} font={fonts.inter[600]} fontSize={11}>
            Field Finder
          </Text>
        </View>

        <View style={styles.textContent}>
          <View>
            <Text
              textAlign="center"
              fontSize={22}
              color={colors.green[1]}
              font={fonts.inter[600]}
              style={styles.description}
            >
              {CARDS[currentIndex].title}
            </Text>
            <View style={{ height:150, alignItems:"center", justifyContent:"center"}}>
              <Text
                textAlign="center"
                fontSize={15}
                color={colors.dark[1]}
                font={fonts.inter[400]}
                style={styles.description}
              >
                {CARDS[currentIndex].description}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:"center"}}>
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
            </View>
          </View>

          <View
          style={{ justifyContent:"center", marginBottom:Platform.OS === "ios" ? 50 : 30,flexDirection:"row"}}
          >
            <View>
              <Button onPress={skipSlide}>
                <Text
                  fontSize={15}
                  font={fonts.inter[400]}
                  color={colors.green[1]}
                >
                  Skip
                </Text>
              </Button>
            </View>
            <View style={{ marginLeft: '50%'}}>
              <Button roundButton onPress={handleGoToNextSlide}>
                <RightSvgIcon />
              </Button>
            </View>

            <View />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"space-between"
  },
  content:{
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
  },
  imageContent:{
    flex: 2
  },
  dotsContainer:{
    flexDirection: "row",
    justifyContent: "center",
  },
  description:{
    textAlign: "center",
    width: 300,
  },
  dot:{
    height: 5,
    width: 5,
    borderRadius: 10,
    marginRight: 6,
  },
  divider:{
    position: "absolute",
    height: 100,
    width: 100,
    borderRadius: 50,
    top: -50,
    justifyContent:"center", 
    alignItems:'center'
  },
  textContent:{
    flex: 2, 
    alignItems:"center", 
    justifyContent:"space-between", 
    paddingVertical: 60,
  }
});
