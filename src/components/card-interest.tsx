import React, { useState } from "react";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import { PressableProps, Image, StyleSheet, ImageStyle } from "react-native";
import { CheckInterestSVG } from "~/assets/icons";
import type { ImageSourcePropType } from "react-native";

type checkBoxProps = PressableProps & {
  tittle: string;
  imageSource: ImageSourcePropType;
};

export const CardInterest: React.FC<checkBoxProps> = ({
  tittle,
  imageSource,
}) => {
  const [active, setActive] = useState(false);

  const { fonts, colors } = useTheme();

  const CardInterest = {
    color: colors.white,
    fontFamily: fonts.inter[500],
    fontSize: 14,
    height: 130,
    width: 105,
  };
  const ImageStyles: ImageStyle = {
    height: 105,
    width: 105,
    borderRadius: 15,
    alignItems: "flex-end",
    marginBottom: 10,
  };

  const clickCard = () => {
    setActive(!active);
  };
  return (
    <Button style={CardInterest} onPress={() => clickCard()}>
      <Block center flex={1}>
        <Block style={ImageStyles}>
          <Image
            source={imageSource}
            style={ImageStyles}
            accessibilityIgnoresInvertColors
          />
          {active && <CheckInterestSVG style={{ position: "absolute" }} />}
        </Block>

        <Text>{tittle}</Text>
      </Block>
    </Button>
  );
};
