import React from "react";
import { Block } from "./block";
import { Button } from "./button";
import { Text } from "./text";
import { useTheme } from "~/hooks/theme";
import { CopySvgIcon, PinSVGIcon } from "~/assets/icons";

type AddressProps = {
  address: string;
};
export const ShareAddress: React.FC<AddressProps> = ({ address, ...props }) => {
  const { colors } = useTheme();

  return (
    <Block row justifyContent="space-between" mt={10}>
      <PinSVGIcon color={colors.dark[4]} />
      <Text color={colors.dark[4]}>{address}</Text>
      <Button>
        <CopySvgIcon />
      </Button>
    </Block>
  );
};
