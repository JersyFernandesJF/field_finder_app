import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Input } from "./input";
import { Text } from "./text";
import { FootbalIcon, SaveSVGIcon } from "~/assets/icons";
import { ViewStyle, Pressable, Image, Dimensions } from "react-native";
import { useEffect, useState } from "react";

type EventCardProps = React.ComponentProps<typeof Input> & {
  data: {
    user: any;
    images: string[];
    minguest: number;
    maxguest: number;
    start_time: string;
    name: string;
    end_time: string;
    guest: number;
    date: string;
  };
  event?: boolean;
};
export const EventCard: React.FC<EventCardProps> = ({
  event,
  data,
  ...props
}) => {
  const [save, setSave] = useState(true);
  const { colors, fonts } = useTheme();
  const boxStyle = {
    height: 30,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.green[1],
  } as ViewStyle;
  const container = {
    display: "flex",
    height: 120,
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: "column",
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  } as ViewStyle;

  useEffect(() => {
    console.log(data);
  });

  return (
    <Block style={container} my={15} px={18}>
      <Block
        flex={2}
        row
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Block row alignItems="center" flex={1}>
          <Image
            source={{
              uri: `${data.images[0]}`,
            }}
            style={{ width: 80, height: 60, borderRadius: 6 }}
          />
          <Block ml={10} height={65} justifyContent="space-between">
            <Block>
              <Text fontSize={12}>11:00 AM - Rio Tinto, Areosa</Text>
            </Block>
            <Block>
              <Text fontSize={10} color={colors.dark[1]}>
                by @{data.name}
              </Text>
            </Block>
            <Block row>
              <Block row mr={5}>
                <FootbalIcon />
                <Text fontSize={11} color={colors.green[1]}>
                  Footbal
                </Text>
              </Block>
              <Text fontSize={11} color={colors.green[1]}>
                {data.date}
              </Text>
            </Block>
            <Block>
              <Text fontSize={9} color={colors.dark[1]}>
                {data.minguest} Min guest
              </Text>
            </Block>
          </Block>
        </Block>
        <Block alignItems="flex-end">
          {event && (
            <Pressable onPress={() => setSave(!save)}>
              <SaveSVGIcon save={save} />
            </Pressable>
          )}
          <Block style={boxStyle} my={8}>
            <Text color={colors.green[1]} fontSize={10}>
              {data.guest} / {data.maxguest}
            </Text>
          </Block>
        </Block>
      </Block>
      <Block style={{ borderColor: colors.dark[2], borderBottomWidth: 1 }} />
      <Block
        flex={1}
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <Text>$3,5</Text>
      </Block>
    </Block>
  );
};
