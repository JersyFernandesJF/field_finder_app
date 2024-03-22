import React, { useState } from "react";
import { PencilSvgIcon } from "~/assets/icons";
import { View } from "react-native";
import { View, Button, Text, CreateEventForm, EventCard } from "~/components";
import { useTheme } from "~/hooks/theme";

export const MyEvents = () => {
  const [data, setData] = useState(false);
  const [list, setList] = useState(true);
  const { colors } = useTheme();
  //tem que colocar o eventCardInfo + o text em um so elemento
  return (
    <View style={{ flex: 1, justifyContent:"center"}}>
      {!data && (
        <View style={{ flex: 2, justifyContent:"space-between"}}>
          {!list && (
            <View style={{ flex: 3, justifyContent:"flex-end"}}>
              <View style={{ alignContent:"center", justifyContent:"center"}}>
                <Text fontSize={22}>Your list of events is empty</Text>
                <Text fontSize={15} color={colors.dark[1]}>
                  Search for events
                </Text>
              </View>
            </View>
          )}

          <View style={{ flex: 3, justifyContent:list ? "flex-start" : "flex-end"}}>
            <View style={{ marginBottom: 15}}>
              <Button
                row
                right={<PencilSvgIcon style={{ marginLeft: 10 }} />}
                defaultStyle
                onPress={() => {
                  setData(true);
                }}
              >
                Create Event
              </Button>
            </View>

            {list && (
              <View>
                <View>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </View>
                <View>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </View>
                <View>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </View>
                <View>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </View>
              </View>
            )}
          </View>
        </View>
      )}
      {data && <CreateEventForm />}
    </View>
  );
};
