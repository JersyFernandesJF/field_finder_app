import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
export const SearchSvgIcon = (props: SvgProps) => (
  <Svg {...props} width={20} height={20} fill="none">
    <G
      stroke="#005C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M8.75 15a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5ZM13.17 13.17l4.33 4.33" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
