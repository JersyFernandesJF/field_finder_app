import React, { useRef, useState } from "react";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import {
  PressableProps,
  Image,
  StyleSheet,
  ImageStyle,
  Dimensions,
  Modal,
  Alert,
  ViewStyle,
  Animated,
} from "react-native";
import { Slide } from "./slide";
import { FootbalIcon } from "~/assets/icons";

type DetailModalProps = {
  onClose: () => void;
};
const { width, height } = Dimensions.get("window");

export const DetailModal: React.FC<DetailModalProps> = ({ onClose }) => {
  const { colors } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const boxStyle = {
    height: 40,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.green[1],
  } as ViewStyle;

  return (
    <Block center mt={22} flex={1}>
      <Block
        justifyContent="space-between"
        style={{
          backgroundColor: colors.white,
          height: 380,
          width: 350,

          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Block center mt={10}>
          <Image
            style={{
              height: 180,
              width: 330,
              borderRadius: 12,
            }}
            source={require("../assets/image/onboarding/onboarding2.jpg")}
          />
        </Block>

        <Block row justifyContent="space-between" px={20}>
          <Block>
            <Block>
              <Text fontSize={16} fontWeight="500">
                Angolanos vs Cv
              </Text>
            </Block>
            <Block>
              <Text fontSize={14}>11:00 AM - Rio Tinto, Areosa</Text>
            </Block>
            <Block>
              <Text fontSize={13} color={colors.dark[1]}>
                by @Jersy Fernandes
              </Text>
            </Block>
            <Block row>
              <Block row mr={5}>
                <FootbalIcon active={false} />
                <Text fontSize={12} color={colors.green[1]}>
                  Footbal
                </Text>
              </Block>
              <Text fontSize={12} color={colors.green[1]}>
                11:00 AM
              </Text>
            </Block>
            <Block>
              <Text fontSize={11} color={colors.dark[1]}>
                19 Min Players - 20 Max Players
              </Text>
            </Block>
          </Block>
          <Block>
            <Text color={colors.green[1]} fontSize={12}>
              Ver mais
            </Text>
            <Block style={boxStyle} my={8}>
              <Text color={colors.green[1]} fontSize={12}>
                13 / 14
              </Text>
            </Block>
          </Block>
        </Block>
        <Block row justifyContent="space-between" px={20} mb={15}>
          <Button borderedSmall onPress={onClose}>
            Close
          </Button>
          <Button defaultSmallStyle onPress={onClose}>
            Join
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
    width: 300,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    marginRight: 6,
  },
  divider: {
    position: "absolute",
    height: 100,
    width: 100,
    borderRadius: 50,
    top: -50,
  },
});
