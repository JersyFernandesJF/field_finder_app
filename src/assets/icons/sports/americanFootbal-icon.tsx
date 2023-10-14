import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type Icon = SvgProps & {
  active: boolean;
};

export const AmericanFootbalIcon = (props: Icon) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.active ? "#FFF" : "#005C5C"}
      d="M1.5.5v6.479h4V8c-.547 0-1 .453-1 1v2.5h3V9c0-.547-.453-1-1-1V6.979h4V.5h-1v5.479h-7V.5h-1Zm4 8.5h1v1.5h-1V9Z"
    />
  </Svg>
);
