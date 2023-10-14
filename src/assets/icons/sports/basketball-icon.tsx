import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type Icon = SvgProps & {
  active: boolean;
};

export const BasketBallIcon = (props: Icon) => (
  <Svg width={9} height={12} fill="none" {...props}>
    <Path
      fill={props.active ? "#FFF" : "#005C5C"}
      d="M3.987.75a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333ZM2.821 3.667a.583.583 0 0 0-.324.098L.747 4.93a.584.584 0 0 0-.26.486v1.75h1.167V5.729l.806-.538-.344 2.534.005.001L1.8 9.451.208 10.875l.73.907 1.74-1.531a.584.584 0 0 0 .221-.352l.28-1.55L4.627 9.8l.509 2.034h1.203l-.62-2.475a.582.582 0 0 0-.152-.27L4.205 7.726l.305-2.514.742 1.112a.584.584 0 0 0 .485.26h1.75V5.416H6.05l-.994-1.49a.583.583 0 0 0-.485-.26H2.82Zm4.958 3.5a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z"
    />
  </Svg>
);
