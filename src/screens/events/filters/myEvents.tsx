import React, { useState } from "react";
import { PencilSvgIcon } from "~/assets/icons";
import { Block, Button, Text, CreateEventForm } from "~/components";
import { useTheme } from "~/hooks/theme";

export const MyEvents = () => {
  const [data, setData] = useState(false);
  const { colors } = useTheme();

  return (
    <Block flex={1} justifyContent="center">
      {!data && (
        <Block flex={2} justifyContent="space-between">
          <Block flex={3} justifyContent="flex-end">
            <Block center>
              <Text fontSize={22}>Your list of events is empty</Text>
              <Text fontSize={15} color={colors.dark[1]}>
                Search for events
              </Text>
            </Block>
          </Block>

          <Block flex={3} justifyContent="flex-end">
            <Block>
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
          </Block>
        </Block>
      )}
      {data && <CreateEventForm />}
    </Block>
  );
};
