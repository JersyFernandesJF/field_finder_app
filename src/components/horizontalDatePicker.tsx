import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Input } from "./input";
import { Text } from "./text";
import { useEffect, useRef, useState } from "react";
import { ViewStyle, Pressable, FlatList, Dimensions } from "react-native";
import { MomentInput } from "moment";
import moment from "moment";

type HorizontalDatePickerProps = React.ComponentProps<typeof Input> & {
  days: number;
};
export const HorizontalDatePicker: React.FC<HorizontalDatePickerProps> = ({
  days = 30,
  ...props
}) => {
  const { colors, fonts } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const endDate = moment().add(days, "days"); // Example end date
    const dates = getDatesWithWeekdays(endDate);
    setData(dates);
  }, []);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const ITEM_WIDTH = (Dimensions.get("window").width - 60) / 7;
  const ITEMS_PER_PAGE = 7;

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(
      contentOffsetX / (ITEM_WIDTH * ITEMS_PER_PAGE)
    );
    setCurrentPage(pageIndex);
  };
  const getDatesWithWeekdays = (endDate: MomentInput) => {
    var dates = [];
    var current = moment();
    var end = moment(endDate);

    while (current <= end) {
      dates.push({
        day: current.format("DD"),
        month: current.format("MM"),
        weekday: current.format("dddd"),
      });
      current.add(1, "day");
    }
    return dates;
  };

  const renderItems = ({ item, index }: { item: any; index: number }) => {
    const itemIndex = parseInt(item.key);
    if (
      itemIndex < currentPage * ITEMS_PER_PAGE ||
      itemIndex >= (currentPage + 1) * ITEMS_PER_PAGE
    )
      return null;

    return (
      <Pressable
        onPress={() => setCurrentIndex(index)}
        style={[
          boxStyle,
          index == currentIndex ? { backgroundColor: colors.green[1] } : {},
        ]}
      >
        <Text
          color={index == currentIndex ? colors.white : colors.dark[1]}
          fontSize={12}
        >
          {item.weekday.substring(0, 3)}
        </Text>
        <Text
          color={index == currentIndex ? colors.white : colors.black}
          fontSize={16}
        >
          {item.day}
        </Text>
      </Pressable>
    );
  };
  const boxStyle = {
    flex: 1,
    height: 50,
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  } as ViewStyle;
  const container = {
    display: "flex",
    height: 50,
    alignItems: "center",
  } as ViewStyle;

  return (
    <Block style={container} my={15}>
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </Block>
  );
};
