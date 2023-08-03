import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type CheckSVGIconProps = SvgProps & {
  remember?: boolean;
};
export const CheckSVGIcon: React.FC<CheckSVGIconProps> = ({
  remember,
  ...props
}) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 1.333C4.327 1.333 1.333 4.327 1.333 8c0 3.673 2.994 6.667 6.667 6.667 3.673 0 6.667-2.994 6.667-6.667 0-3.673-2.994-6.667-6.667-6.667Zm3.187 5.134-3.78 3.78a.5.5 0 0 1-.707 0L4.813 8.36a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.533 1.534L10.48 5.76a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707Z"
      fill={remember ? "#005C5C" : "rgba(17, 24, 48, 0.3)"}
    />
  </Svg>
);
