import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Block } from "./block";
import { Input } from "./input";
import { Button } from "./button";
export const CreateEventForm = () => {
  return (
    <Block flex={1} justifyContent="space-evenly">
      <Input standard placeholder="Event Name" />
      <Input standard placeholder="Sport" />
      <Input standard placeholder="Local" />
      <Input standard placeholder="Date" />

      <Block row justifyContent="space-around">
        <Input standard placeholder="Event Name" />
        <Input standard placeholder="Event Name" />
      </Block>
      <Input standard placeholder="Details of your event" />
      <Block>
        <Button row defaultStyle>
          Publish Event
        </Button>
      </Block>
    </Block>
  );
};
