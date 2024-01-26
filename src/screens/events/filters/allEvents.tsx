import React from "react";
import { PencilSvgIcon, SearchSvgIcon } from "~/assets/icons";
import { ScrollView, StatusBar, SafeAreaView } from "react-native";
import {
  Block,
  Text,
  Input,
  HorizontalDatePicker,
  EventCard,
} from "~/components";
import Db from "~/assets/dummy/db.json";
import { useTheme } from "~/hooks/theme";

export const AllEvents = () => {
  const { eventsDB } = Db;
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <Input
        right={<SearchSvgIcon style={{ marginLeft: 10, marginRight: 10 }} />}
        placeholder="Search for events"
        standard
      />
      <Block>
        <Block>
          <HorizontalDatePicker days={14} />
        </Block>

        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <Block>
          {eventsDB.map((event, index) => {
            return <EventCard key={index} data={event} />;
          })}
        </Block>
      </Block>
    </SafeAreaView>
  );
};
