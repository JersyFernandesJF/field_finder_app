import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const EmailSVGIcon = (props?: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.667 4.167H3.333A.833.833 0 0 0 2.5 5v10c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V5a.833.833 0 0 0-.833-.833ZM3.333 2.5A2.5 2.5 0 0 0 .833 5v10a2.5 2.5 0 0 0 2.5 2.5h13.334a2.5 2.5 0 0 0 2.5-2.5V5a2.5 2.5 0 0 0-2.5-2.5H3.333Z"
      fill="#111830"
      fillOpacity={0.3}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.36 6.133a.833.833 0 0 1 1.173-.107l3.934 3.278a.833.833 0 0 0 1.066 0l3.934-3.278a.833.833 0 0 1 1.066 1.28l-3.932 3.278a2.5 2.5 0 0 1-3.201 0L4.467 7.307a.833.833 0 0 1-.107-1.174Z"
      fill="#111830"
      fillOpacity={0.3}
    />
  </Svg>
);
