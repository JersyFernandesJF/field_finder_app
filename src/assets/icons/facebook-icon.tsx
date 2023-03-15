import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export const FacebookSVGIcon = (props?: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.992 3.656 9.129 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.242 0-1.629.772-1.629 1.563V10h2.774l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.992 20 10Z"
        fill="#1877F2"
      />
      <Path
        d="m13.893 12.89.443-2.89h-2.774V8.125c0-.791.387-1.563 1.63-1.563h1.261v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.778 1.385-3.778 3.89V10H5.898v2.89h2.54v6.989a10.057 10.057 0 0 0 3.124 0V12.89h2.33Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
