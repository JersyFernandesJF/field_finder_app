import {
  Block,
  Button,
  Text,
  Comment,
  Include,
  Post,
  MonthFilter,
} from "~/components";

export const DiscoverScreen = () => {
  const stylesText = {
    color: "rgba(0, 0, 0, 0.7)",
  };
  return (
    <Block flex={1} style={{ backgroundColor: "#ffff" }} center>
      <Block
        center
        style={{
          width: 140,
          height: 30,
          backgroundColor: "#D9D9D9",
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Text fontSize={15} fontWeight="500">
          24, January, 2023
        </Text>
      </Block>
      <Block
        row
        justifyContent="space-between"
        center
        px={10}
        style={{
          width: 300,
          height: 55,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "rgba(196, 196, 196, 1)",
          marginBottom: 10,
        }}
      >
        <Text style={stylesText} fontWeight="500" fontSize={12}>
          09:00 - 09:30
        </Text>
        <Text style={stylesText} fontWeight="500" fontSize={12}>
          31,50$
        </Text>
      </Block>
      <Block
        row
        justifyContent="space-between"
        center
        px={10}
        style={{
          backgroundColor: "#005C5C",
          width: 300,
          height: 55,
          borderRadius: 10,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: "white" }} fontWeight="500" fontSize={12}>
          09:00 - 09:30
        </Text>
        <Text style={{ color: "white" }} fontWeight="500" fontSize={12}>
          31,50$
        </Text>
      </Block>
      <MonthFilter />
    </Block>
  );
};
