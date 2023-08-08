import React, { useState } from "react";
import { PencilSvgIcon } from "~/assets/icons";
import { Block, Button, Text, CreateEventForm, EventCard } from "~/components";
import { useTheme } from "~/hooks/theme";

export const MyEvents = () => {
  const [data, setData] = useState(false);
  const [list, setList] = useState(true);
  const { colors } = useTheme();
  //tem que colocar o eventCardInfo + o text em um so elemento
  return (
    <Block flex={1} justifyContent="center">
      {!data && (
        <Block flex={2} justifyContent="space-between">
          {!list && (
            <Block flex={3} justifyContent="flex-end">
              <Block center>
                <Text fontSize={22}>Your list of events is empty</Text>
                <Text fontSize={15} color={colors.dark[1]}>
                  Search for events
                </Text>
              </Block>
            </Block>
          )}

          <Block flex={3} justifyContent={list ? "flex-start" : "flex-end"}>
            <Block mb={15}>
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
            </Block>

            {list && (
              <Block>
                <Block>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </Block>
                <Block>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </Block>
                <Block>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </Block>
                <Block>
                  <Text color={colors.green[1]} fontWeight="600">
                    Monday, August 3RD, 2023
                  </Text>
                  <EventCard />
                </Block>
              </Block>
            )}
          </Block>
        </Block>
      )}
      {data && <CreateEventForm />}
    </Block>
  );
};
