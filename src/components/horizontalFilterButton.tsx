import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Block, Button, Text, CreateEventForm, EventCard } from "~/components";
import { FilterIcons } from "~/assets/icons/sports";
import { useSportsList } from "~/config/firebase/Providers/SportsProvider";
import { useTheme } from "~/hooks/theme";

export const HorizontalFilterButton = () => {
  const [sports, setSports] = useState(useSportsList());
  const listIcons = sports.map((sport) => {
    return sport.name;
  });
  const { colors, fonts } = useTheme();
  const Icons = FilterIcons(listIcons);

  const setIcon = (name: string, active: boolean) => {
    if (Object.keys(Icons).includes(name)) {
      const IconComponent = Icons[name];
      return <IconComponent active={active} style={{ marginRight: 5 }} />;
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Block mt={10}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {sports.map((element, index) => {
          return (
            <Button
              onPress={() => setCurrentIndex(index)}
              chips
              active={index == currentIndex}
            >
              <Block
                center
                justifyContent="space-around"
                paddingHorizontal={10}
                style={{ flexDirection: "row" }}
              >
                {setIcon(element.name, currentIndex == index)}
                <Text
                  fontSize={14}
                  color={index == currentIndex ? colors.white : colors.green[1]}
                >
                  {element.name}
                </Text>
              </Block>
            </Button>
          );
        })}
      </ScrollView>
    </Block>
  );
};
