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
  const { eventsDB, fieldsDB, usersDB } = Db;
  const { colors } = useTheme();

  const elemntsFiltered = (id: number) => {
    let dataEvents = eventsDB.filter((obj) => obj.id === id);
    let dataFields = fieldsDB.filter((obj) => obj.id === dataEvents[0].field);
    let dataUsers = usersDB.filter((obj) => obj.id === dataEvents[0].user);

    const dataFinal = Object.assign(
      {},
      dataEvents[0],
      dataUsers[0],
      dataFields[0]
    );

    return dataFinal;
  };

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
            return <EventCard key={index} data={elemntsFiltered(event.id)} />;
          })}
        </Block>
      </Block>
    </SafeAreaView>
  );
};
