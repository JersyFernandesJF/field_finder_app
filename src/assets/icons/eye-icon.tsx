import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const EyeSVGIcon = (props?: any) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.387 8A2.384 2.384 0 0 1 8 10.387 2.384 2.384 0 0 1 5.613 8 2.384 2.384 0 0 1 8 5.613 2.384 2.384 0 0 1 10.387 8Z"
      stroke="#111830"
      strokeOpacity={0.3}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 13.513c2.353 0 4.547-1.386 6.073-3.786.6-.94.6-2.52 0-3.46C12.547 3.867 10.353 2.48 8 2.48S3.453 3.867 1.927 6.267c-.6.94-.6 2.52 0 3.46 1.526 2.4 3.72 3.786 6.073 3.786Z"
      stroke="#111830"
      strokeOpacity={0.3}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
