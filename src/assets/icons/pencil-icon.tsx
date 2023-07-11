import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export const PencilSvgIcon = (props: SvgProps) => (
  <Svg {...props} width={15} height={16} fill="none">
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path d="M5.431 13.156H2.812a.469.469 0 0 1-.468-.468v-2.619c0-.124.05-.243.137-.331l7.226-7.226a.469.469 0 0 1 .662 0l2.619 2.617a.469.469 0 0 1 0 .663l-7.226 7.227a.468.468 0 0 1-.33.137ZM7.969 4.25l3.281 3.281" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
