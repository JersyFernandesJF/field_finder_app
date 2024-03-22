import * as React from "react";
import {  Text, EventCard } from "~/components";
import { useTheme } from "~/hooks/theme";
import { View } from "react-native";

export const SaveEvents = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </View>
      <View>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </View>
      <View>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </View>
      <View>
        <Text color={colors.green[1]} fontWeight="600">
          Monday, August 3RD, 2023
        </Text>
        <EventCard event />
      </View>
    </View>
  );
};
