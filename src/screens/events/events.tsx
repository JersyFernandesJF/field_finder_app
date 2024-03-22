import { AllEvents, MyEvents, SaveEvents } from "./filters";
import {  Button, Text, Comment, Include, Input } from "~/components";
import { useTheme } from "~/hooks/theme";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

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

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 30}}>
          <View style={{ marginBottom: 30}}>
            <View style={{marginVertical:20}}>
              <Text fontSize={17}>Events</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
              <View style={{marginRight:5}}>
                <Button
                  toggleButton
                  active={all}
                  onPress={() => handleScreenPress("all")}
                >
                  <Text color={all ? colors.white : colors.green[1]}>All</Text>
                </Button>
              </View>
              <View style={{marginRight:5}}>
                <Button
                  toggleButton
                  active={myEvents}
                  onPress={() => handleScreenPress("myEvents")}
                >
                  <Text color={myEvents ? colors.white : colors.green[1]}>
                    My Events
                  </Text>
                </Button>
              </View>
              <View style={{marginRight:5}}>
                <Button
                  toggleButton
                  active={save}
                  onPress={() => handleScreenPress("save")}
                >
                  <Text color={save ? colors.white : colors.green[1]}>
                    Save
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          {all && !myEvents && !save && <AllEvents />}
          {myEvents && !all && !save && <MyEvents />}
          {save && !all && !myEvents && <SaveEvents />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
