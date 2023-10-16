import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const FiltersSVGIcon = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      fill="#005C5C"
      d="M13.3 3.5a1.4 1.4 0 0 0-1.211.7h-9.29a.7.7 0 1 0 0 1.4h9.291a1.4 1.4 0 1 0 1.21-2.1ZM16 4.2c.059.225.099.457.099.7 0 .243-.04.475-.099.7H18.2a.7.7 0 0 0 0-1.4h-2.198ZM6.3 9.1c-.5 0-.96.268-1.21.7H2.8a.7.7 0 1 0 0 1.4h2.289a1.4 1.4 0 1 0 1.21-2.1Zm2.702.7c.058.225.098.457.098.7 0 .243-.04.475-.098.7H18.2a.7.7 0 1 0 0-1.4H9.002Zm1.498 4.9a1.4 1.4 0 0 0-1.211.7h-6.49a.7.7 0 1 0 0 1.4H9.29a1.4 1.4 0 1 0 1.21-2.1Zm2.701.7c.059.225.099.457.099.7 0 .243-.04.475-.099.7H18.2a.7.7 0 1 0 0-1.4h-4.998Z"
    />
  </Svg>
);
