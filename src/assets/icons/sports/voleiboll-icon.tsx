import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type Icon = SvgProps & {
  active: boolean;
};

export const VoleiballIcon = (props: Icon) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.active ? "#FFF" : "#005C5C"}
      d="M8.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 .5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.51 2.522l-.5 2.375a.5.5 0 0 0 .557.598L4.5 5.233V7.8l-.367.823a.504.504 0 0 0-.013.033.49.49 0 0 0-.012.007l-1.602.972.518.855 1.591-.965a.996.996 0 0 0 .445-.527l-.013.032.557-1.25L6 7.7v1.235l-.483 1.811.966.258.482-1.809A.986.986 0 0 0 7 8.935v-4.04l2.942-.4-.134-.99-6.673.904.354-1.681-.978-.206Z"
    />
  </Svg>
);
