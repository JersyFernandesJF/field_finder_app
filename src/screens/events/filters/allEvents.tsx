import * as React from "react";
import { PencilSvgIcon, SearchSvgIcon } from "~/assets/icons";
import { Block, Button, Text, Comment, Include, Input } from "~/components";

export const AllEvents = () => (
  <Block>
    <Block>
      <Input
        right={<SearchSvgIcon style={{ marginLeft: 10, marginRight: 10 }} />}
        placeholder="Search for events"
        standard
      />
      <Block mt={15}>
        <Button
          row
          right={<PencilSvgIcon style={{ marginLeft: 10 }} />}
          defaultStyle
        >
          Create Event
        </Button>
      </Block>
    </Block>

    <Text fontSize={17}>Category</Text>
    <Text fontSize={17}>All Events</Text>
  </Block>
);
