import { useEffect, useState } from "react";
import {
  Block,
  Button,
  Input,
  Text,
  InputFormField,
  CreateEventForm,
} from "~/components";
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
    <Block flex={1} safe px={30}>
      <CreateEventForm />
    </Block>
  );
};
