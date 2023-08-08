import * as React from "react";
import { PencilSvgIcon, SearchSvgIcon } from "~/assets/icons";
import {
  Block,
  Text,
  Input,
  HorizontalDatePicker,
  EventCard,
} from "~/components";
import { useTheme } from "~/hooks/theme";

export const AllEvents = () => {
  const { colors } = useTheme();
  return (
    <Block>
      <Block>
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
          <EventCard event />
          <EventCard event />
          <EventCard event />
          <EventCard event />
        </Block>
      </Block>
    </Block>
  );
};
