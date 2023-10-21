import React, { useCallback, useMemo, useRef } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Block } from "./block";
import { Input } from "./input";
import { Button } from "./button";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet } from "react-native";

type DetailModalProps = {
  onClose: () => void;
};

export const CreateEventForm: React.FC<DetailModalProps> = ({ onClose }) => {
  return (
    <Block
      flex={1}
      justifyContent="space-evenly"
      style={{ backgroundColor: "red" }}
    >
      <Input standard placeholder="Event Name" />
      <Input standard placeholder="Sport" />
      <Input standard placeholder="Local" />
      <Input standard placeholder="Date" />

      <Block row justifyContent="space-around">
        <Input standard placeholder="Event Name" />
        <Input standard placeholder="Event Name" />
      </Block>
      <Input standard placeholder="Details of your event" />
      <Block>
        <Button row defaultStyle onPress={onClose}>
          Publish Event
        </Button>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
