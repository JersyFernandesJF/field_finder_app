import React, { useEffect, useState } from "react";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import moment from "moment";

export const MonthFilter = () => {
  const [months, setMonths] = useState(Array<Array<string>>);
  const month: string[] = moment.months();
  const [selectedMonth, setSelectedMonth] = useState(Array<number>);

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
    console.log(month);
    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < months[i].length; j++) {
        if (months[i][j] === month) {
          return [i, j];
        }
      }
    }
    return [0, 0];
  };
  const setIndex = (indexRow: number, indexColumn: number) => {
    setSelectedMonth([indexRow, indexColumn]);
  };
  useEffect(() => {
    setMonths(splitMonths(month));
    setSelectedMonth(findIndex(moment().format("MMMM")));
  }, []);
  const boxStyle = {
    height: 30,
    width: 100,
    borderRadius: 6,
  };
  return (
    <Block center>
      {months.map((array, indexRow) => (
        <Block row mb={10} key={indexRow}>
          {array.map((month, indexColumn) => (
            <Button onPress={() => setIndex(indexRow, indexColumn)}>
              <Block
                key={indexColumn}
                row
                mr={10}
                center
                style={[
                  boxStyle,
                  {
                    backgroundColor:
                      indexColumn == selectedMonth[1] &&
                      indexRow == selectedMonth[0]
                        ? "#005C5C"
                        : "white",
                  },
                ]}
              >
                <Text
                  fontSize={15}
                  color={
                    indexColumn == selectedMonth[1] &&
                    indexRow == selectedMonth[0]
                      ? "white"
                      : "black"
                  }
                >
                  {month}
                </Text>
              </Block>
            </Button>
          ))}
        </Block>
      ))}
    </Block>
  );
};
