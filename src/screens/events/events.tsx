import { AllEvents, MyEvents, SaveEvents } from "./filters";
import { Block, Button, Text, Comment, Include, Input } from "~/components";
import { useTheme } from "~/hooks/theme";
import { useState } from "react";
import { ScrollView } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet } from "react-native";

export const EventsScreen = () => {
  const [all, setAll] = useState(true);
  const [myEvents, setMyEvents] = useState(false);
  const [save, setSave] = useState(false);

  const { colors, fonts } = useTheme();

  const handleScreenPress = (type: string) => {
    switch (type) {
      case "all":
        setAll(true);
        setMyEvents(false);
        setSave(false);
        break;
      case "myEvents":
        setAll(false);
        setMyEvents(true);
        setSave(false);
        break;
      case "save":
        setAll(false);
        setMyEvents(false);
        setSave(true);
        break;
    }
  };
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <Block flex={1} marginTop={60} px={30}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block mb={30}>
            <Block marginVertical={20}>
              <Text fontSize={17}>Events</Text>
            </Block>
            <Block row>
              <Block marginRight={5}>
                <Button
                  toggleButton
                  active={all}
                  onPress={() => handleScreenPress("all")}
                >
                  <Text color={all ? colors.white : colors.green[1]}>All</Text>
                </Button>
              </Block>
              <Block marginRight={5}>
                <Button
                  toggleButton
                  active={myEvents}
                  onPress={() => handleScreenPress("myEvents")}
                >
                  <Text color={myEvents ? colors.white : colors.green[1]}>
                    My Events
                  </Text>
                </Button>
              </Block>
              <Block marginRight={5}>
                <Button
                  toggleButton
                  active={save}
                  onPress={() => handleScreenPress("save")}
                >
                  <Text color={save ? colors.white : colors.green[1]}>
                    Save
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
          {all && !myEvents && !save && <AllEvents />}
          {myEvents && !all && !save && (
            <MyEvents onClose={() => handlePresentModalPress()} />
          )}
          {save && !all && !myEvents && <SaveEvents />}
        </ScrollView>
        <Button floatButton />
      </Block>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
