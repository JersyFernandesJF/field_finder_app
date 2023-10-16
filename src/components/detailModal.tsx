import React, { useState } from "react";
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
} from "react-native";
import { Slide } from "./slide";

type DetailModalProps = {
  onClose: () => void;
};

export const DetailModal: React.FC<DetailModalProps> = ({ onClose }) => {
  const { colors } = useTheme();

  return (
    <Block center mt={22} flex={1}>
      <Block
        justifyContent="space-between"
        style={{
          backgroundColor: colors.white,
          height: 350,
          width: 350,

          borderRadius: 14,
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
        <Block center mt={15}>
          <Image
            style={{
              height: 160,
              width: 315,
              borderRadius: 12,
            }}
            source={require("../assets/image/onboarding/onboarding2.jpg")}
          />
        </Block>
        <Block row>
          <Block></Block>
          <Block></Block>
        </Block>
        <Block row justifyContent="space-between" px={30} mb={15}>
          <Button defaultStyle onPress={onClose}>
            Close
          </Button>
          <Button defaultStyle onPress={onClose}>
            Close
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
