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
    height: 135,
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
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
    <Block
      style={container}
      my={15}
      px={20}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Image
        source={{
          uri: `${data.images[0]}`,
        }}
        style={{ width: 110, height: 100, borderRadius: 6 }}
      />
      <Block row flex={1}>
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

      <Block center justifyContent="space-between" mt={10}>
        <SaveSVGIcon save={!save} />
        <Block>
          <Text>$3,5</Text>
        </Block>
      </Block>
    </Block>
  );
};
