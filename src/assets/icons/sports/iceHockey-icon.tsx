import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type Icon = SvgProps & {
  active: boolean;
};

export const IceHockeyIcon = (props: Icon) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.active ? "#FFF" : "#005C5C"}
      d="M10.705 9 10 8.29V7.22a.47.47 0 0 0-.2-.38C9.535 6.655 8.985 6.33 8 6l-.5-.165V6.5h-1V5.42a1.012 1.012 0 0 1-.425-.65l-1.35.675-.45-.89L6 3.695V.5H5s-1 0-1 1V3l-1.5.6V2.5h-1V7.095c0 .47.175.905.46 1.235L1.295 9 1 9.295v.83C1 11.01 2.02 11.5 3.875 11.5H10c.605 0 1.5-.4 1.5-1.5v-.205l-.5-.5L10.705 9ZM10 10.5H3.875c-1.195 0-1.815-.245-1.875-.375v-.42L2.71 9l.095-.095c.19.06.39.095.6.095H9.29l1.185 1.185c-.07.245-.29.31-.475.315Z"
    />
  </Svg>
);
