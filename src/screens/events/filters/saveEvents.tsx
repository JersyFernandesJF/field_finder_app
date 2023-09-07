import * as React from "react";
import { Block, Text, EventCard, HorizontalFilterButton } from "~/components";
import { useTheme } from "~/hooks/theme";

export const SaveEvents = () => {
  const { colors } = useTheme();

  return (
    <Block>
      <HorizontalFilterButton />
      <Block>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </Block>
      <Block>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </Block>
      <Block>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </Block>
      <Block>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </Block>
    </Block>
  );
};
