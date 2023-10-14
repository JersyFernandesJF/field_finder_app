import { FootbalIcon } from "./footbal-icon";
import { SwimmingIcon } from "./swimming-icon";
import { CricketIcon } from "./cricket-icon";
import { BaseBallIcon } from "./baseball-icon";
import { BasketBallIcon } from "./basketball-icon";
import { VoleiballIcon } from "./voleiboll-icon";
import { AmericanFootbalIcon } from "./americanFootbal-icon";
import { HandBolIcon } from "./handbol-icon";
import { IceHockeyIcon } from "./iceHockey-icon";
import { TennisIcon } from "./tennis-icon";

type IconsSports = {
  [key: string]: any;
};

export const IconsSports: IconsSports = {
  Football: FootbalIcon,
  Swimming: SwimmingIcon,
  Cricket: CricketIcon,
  Baseball: BaseBallIcon,
  Basketball: BasketBallIcon,
  "Ice Hockey": IceHockeyIcon,
  Tennis: TennisIcon,
  Volleyball: VoleiballIcon,
  "American Football": AmericanFootbalIcon,
};
export function FilterIcons(names: string[]): IconsSports {
  const filteredIcons: IconsSports = {};

  for (const name of names) {
    if (Object.keys(IconsSports).includes(name)) {
      filteredIcons[name] = IconsSports[name];
    }
  }

  return filteredIcons;
}
function renderIcon(name: string) {
  return <></>;
}
