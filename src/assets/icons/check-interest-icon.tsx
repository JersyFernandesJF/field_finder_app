import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

export const CheckInterestSVG = (props: SvgProps) => (
  <Svg width={35} height={35} fill="none" {...props}>
    <Circle cx={16.875} cy={16.875} r={11.875} fill="#fff" />
    <Path
      fill="#005C5C"
      d="M17.5 2.917C9.465 2.917 2.917 9.465 2.917 17.5S9.465 32.083 17.5 32.083 32.083 25.535 32.083 17.5 25.535 2.917 17.5 2.917Zm6.97 11.229-8.268 8.269a1.092 1.092 0 0 1-1.546 0l-4.127-4.127a1.1 1.1 0 0 1 0-1.546 1.1 1.1 0 0 1 1.546 0l3.354 3.354 7.496-7.496a1.1 1.1 0 0 1 1.546 0 1.1 1.1 0 0 1 0 1.546Z"
    />
  </Svg>
);
