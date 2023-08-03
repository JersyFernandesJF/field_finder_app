import * as React from "react";
import { PencilSvgIcon, SearchSvgIcon } from "~/assets/icons";
import { Block, Button, Text, Comment, Include, Input } from "~/components";

export const SaveEvents = () => (
  <Block>
    <Block>
      <Button
        row
        right={<PencilSvgIcon style={{ marginLeft: 10 }} />}
        defaultStyle
      >
        Create Event
      </Button>
    </Block>
    <Text fontSize={17}>Draft</Text>
  </Block>
);
