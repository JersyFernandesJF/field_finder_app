import React, { useEffect, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Block } from "./block";
import { Text } from "./text";
import moment from "moment";

export const MonthFilter = () => {
  const [months, setMonths] = useState(Array<Array<string>>);
  const month: string[] = moment.months();
  const [selectedMonth, setSelectedMonth] = useState(Array<number>);
  const currentlyMonth = moment().format("MMMM");

  const splitMonths = (months: string[]) => {
    const result: Array<Array<string>> = [[]];
    let index = 0;

    for (const month of months) {
      if (result[index].length < 3) {
        result[index].push(month);
      } else {
        result.push([]);
        index++;
        result[index].push(month);
      }
    }
    return result;
  };
  const findIndex = (month: string) => {
    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < months[i].length; j++) {
        if (months[i][j] === month) {
          return [i, j];
        }
      }
    }
    return null;
  };

  useEffect(() => {
    setSelectedMonth(findIndex(currentlyMonth));
    setMonths(splitMonths(month));
  }, []);
  const boxStyle = (selected: boolean) => {
    return {
      height: 30,
      width: 100,
      borderRadius: 6,
      backgroundColor: selected ? "#005C5C" : "white",
    };
  };
  return (
    <Block center>
      {months.map((array, indexRow) => (
        <Block row mb={10} key={indexRow}>
          {array.map((month, indexColumn) => (
            <Block
              key={indexColumn}
              row
              mr={10}
              center
              style={boxStyle(
                indexColumn == selectedMonth[1] && indexRow == selectedMonth[0]
                  ? true
                  : false
              )}
            >
              <Text fontSize={15} fontWeight="500">
                {month}
              </Text>
            </Block>
          ))}
        </Block>
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: 30,
    width: 100,
    borderRadius: 6,
    backgroundColor: "#005C5C",
  },
});
