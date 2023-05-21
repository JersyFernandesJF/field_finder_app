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
  [key: string]: React.ReactElement;
};

export const IconsSports: IconsSports = {
  Football: <FootbalIcon style={{ marginRight: 5 }} />,
  Swimming: <SwimmingIcon style={{ marginRight: 5 }} />,
  Cricket: <CricketIcon style={{ marginRight: 5 }} />,
  Baseball: <BaseBallIcon style={{ marginRight: 5 }} />,
  Basketball: <BasketBallIcon style={{ marginRight: 5 }} />,
  "Ice Hockey": <IceHockeyIcon style={{ marginRight: 5 }} />,
  Tennis: <TennisIcon style={{ marginRight: 5 }} />,
  Volleyball: <VoleiballIcon style={{ marginRight: 5 }} />,
  "American Football": <AmericanFootbalIcon style={{ marginRight: 5 }} />,
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
