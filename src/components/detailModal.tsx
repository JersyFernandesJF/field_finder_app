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

export const DetailModal: React.FC = () => {
  return (
    <Block
      center
      flex={1}
      style={{
        backgroundColor: "green",
        height: 350,
        width: 350,
        position: "absolute",
        alignSelf: "center",
        borderRadius: 14,
      }}
    ></Block>
  );
};
