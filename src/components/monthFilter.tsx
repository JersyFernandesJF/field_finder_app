import React, { useEffect, useState } from "react";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import moment from "moment";

const months = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"],
];
export const MonthFilter = () => {
  const month: string[] = moment.months();
  const [selectedMonth, setSelectedMonth] = useState(Array<number>);

  const findIndex = (month: string) => {
    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < months[i].length; j++) {
        if (months[i][j] == month) {
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
function componentDidMount() {
  throw new Error("Function not implemented.");
}
