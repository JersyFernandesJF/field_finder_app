import { PencilSvgIcon, SearchSvgIcon } from "~/assets/icons";
import { Block, Button, Text, Comment, Include, Input } from "~/components";
import { useTheme } from "~/hooks/theme";
import { useState } from "react";

export const EventsScreen = () => {
  const [All, setAll] = useState(true);
  const [MyEvents, setMyEvents] = useState(false);
  const [Save, setSave] = useState(false);

  const { colors, fonts } = useTheme();

  return (
    <Block safe flex={1} justifyContent="space-between" px={30}>
      <Block>
        <Block marginVertical={20}>
          <Text fontSize={17}>Events</Text>
        </Block>
        <Block row>
          <Block marginRight={5}>
            <Button toggleButton active={All}>
              <Text color={MyEvents ? colors.green[1] : colors.white}>All</Text>
            </Button>
          </Block>
          <Block marginRight={5}>
            <Button toggleButton active={MyEvents}>
              <Text color={MyEvents ? colors.white : colors.green[1]}>
                My Events
              </Text>
            </Button>
          </Block>
          <Block marginRight={5}>
            <Button toggleButton active={Save}>
              <Text color={colors.green[1]}>Save</Text>
            </Button>
          </Block>
        </Block>
      </Block>

      <Block>
        <Input
          right={<SearchSvgIcon style={{ marginLeft: 10, marginRight: 10 }} />}
          placeholder="Search for events"
          standard
        />
        <Block mt={15}>
          <Button
            row
            right={<PencilSvgIcon style={{ marginLeft: 10 }} />}
            defaultStyle
          >
            Create Event
          </Button>
        </Block>
      </Block>

      <Text fontSize={17}>Category</Text>
      <Text fontSize={17}>All Events</Text>
    </Block>
  );
};
