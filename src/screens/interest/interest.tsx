import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { EmailSVGIcon } from "~/assets/icons";
import { Block, Button, Text, CardInterest } from "~/components";
import { useTheme } from "~/hooks/theme";
import { MainStackParamsList } from "~/router";

type Props = NativeStackScreenProps<MainStackParamsList, "Interest">;

export const InterestScreen = ({ navigation }: Props) => {
  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} justifyContent="space-between" center px={30}>
      <Text>Choose your sports</Text>
      <Block>
        <CardInterest
          tittle="Ciclismo"
          imageSource={require("../../assets/image/onboarding/onboarding2.jpg")}
        />
      </Block>
      <Block my={12}>
        <Button defaultStyle>Finish</Button>
      </Block>
    </Block>
  );
};
