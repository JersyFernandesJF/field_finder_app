import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const CopySvgIcon = (props: SvgProps) => (
  <Svg {...props} width={13} height={13} fill="none">
    <Path
      stroke="#8B8B8B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.588 12H4.85a.413.413 0 0 1-.412-.413V4.85a.413.413 0 0 1 .412-.413h6.738A.413.413 0 0 1 12 4.85v6.737a.413.413 0 0 1-.412.413Z"
    />
    <Path
      stroke="#8B8B8B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.563 4.438V1.413A.413.413 0 0 0 8.15 1H1.413A.413.413 0 0 0 1 1.413V8.15a.413.413 0 0 0 .413.413h3.025"
    />
  </Svg>
);
