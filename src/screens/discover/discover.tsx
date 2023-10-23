import { Block, Button, Text, Comment, Include, Post } from "~/components";

export const DiscoverScreen = () => {
  return (
    <Block flex={1} style={{ backgroundColor: "#ffff" }} center>
      <Block
        row
        justifyContent="space-between"
        center
        style={{
          width: 290,
          height: 50,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "rgba(212, 212, 212, 1)",
        }}
      >
        <Text>09:00 - 09:30</Text>
        <Text>31,50$</Text>
      </Block>
    </Block>
  );
};
