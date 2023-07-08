import { useEffect, useState } from "react";
import { Block, Button, Input, Text, InputFormField } from "~/components";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "~/hooks/theme";
import { CalendarSvgIcon, PinSVGIcon } from "~/assets/icons";

type LocationDeltaType = {
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = NativeStackScreenProps<MainStackParamsList, "HomeTabs">;

export const CreateEventScreen = () => {
  const { colors, fonts } = useTheme();
  const navigation = useNavigation<Props["navigation"]>();

  return (
    <Block flex={1} justifyContent="space-around" safe marginHorizontal={30}>
      <Input standard placeholder="Event name" />
      <InputFormField
        standard
        placeholder="Joao Amadeu"
        label="Start date and time"
      />
      <Block>
        <Button inlineButton>
          <Text color={colors.green[1]}>Repeat event</Text>
        </Button>
      </Block>
      <Block row justifyContent="space-around">
        <InputFormField standard placeholder="4" label="Min guest" />
        <InputFormField standard placeholder="12" label="Max guest" />
      </Block>
      <InputFormField standard placeholder="Football" label="Choose Sport" />
      <Input standard placeholder="What are the details" />
      <Block>
        <Block row>
          <PinSVGIcon />
          <Text fontSize={16} font={fonts.inter[600]} color={colors.green[1]}>
            Address
          </Text>
        </Block>
        <Text>Rua Dom Afonso Henriques, 655</Text>
      </Block>
      <Block>
        <Button
          defaultStyle
          row
          left={
            <Block marginRight={12}>
              <CalendarSvgIcon />
            </Block>
          }
        >
          Create Event
        </Button>
      </Block>
    </Block>
  );
};
