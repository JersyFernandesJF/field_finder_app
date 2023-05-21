import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const CheckIncludeSvgIcon = (props: SvgProps) => (
  <Svg width={12} height={9} fill="none" {...props}>
    <Path
      d="M9.786.293a1 1 0 0 1 1.511 1.302l-.097.112-6.328 6.328a1 1 0 0 1-1.301.097l-.113-.097L.293 4.871A1 1 0 0 1 1.595 3.36l.112.097 2.457 2.456L9.786.293Z"
      fill="#200E32"
    />
  </Svg>
);
