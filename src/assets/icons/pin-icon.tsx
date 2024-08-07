import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  height?: number;
  width?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
export const PinSVGIcon: React.FC<IconProps> = ({
  height = 18,
  width = 13,
  color = "#005C5C",
  style,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props} style={style}>
    <Path
      fill={color}
      d="M6.5 8.55a2.36 2.36 0 0 1-1.641-.659 2.215 2.215 0 0 1-.68-1.591c0-.597.244-1.169.68-1.591A2.36 2.36 0 0 1 6.5 4.05a2.36 2.36 0 0 1 1.642.659c.435.422.68.994.68 1.591 0 .295-.06.588-.177.861a2.247 2.247 0 0 1-.503.73 2.328 2.328 0 0 1-.754.488 2.386 2.386 0 0 1-.888.171ZM6.5 0a6.606 6.606 0 0 0-4.596 1.845A6.203 6.203 0 0 0 0 6.3C0 11.025 6.5 18 6.5 18S13 11.025 13 6.3c0-1.67-.685-3.273-1.904-4.455A6.606 6.606 0 0 0 6.5 0Z"
    />
  </Svg>
);
