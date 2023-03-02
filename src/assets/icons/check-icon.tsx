import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const CheckSVGIcon = (props?: any) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 1.333C4.327 1.333 1.333 4.327 1.333 8c0 3.673 2.994 6.667 6.667 6.667 3.673 0 6.667-2.994 6.667-6.667 0-3.673-2.994-6.667-6.667-6.667Zm3.187 5.134-3.78 3.78a.5.5 0 0 1-.707 0L4.813 8.36a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.533 1.534L10.48 5.76a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707Z"
      fill="#005C5C"
    />
  </Svg>
);
