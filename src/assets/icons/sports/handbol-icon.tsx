import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type Icon = SvgProps & {
  active: boolean;
};

export const HandBolIcon = (props: Icon) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.active ? "#FFF" : "#005C5C"}
      d="M3 1a1 1 0 0 0-.563 1.828l.766.781c.344.344.774.512 1.172.579l.016.015h.03l.86.031-.937 2.36L3.64 8.14l.921.421.72-1.593.452.172-1.343 3.484.921.36 1.75-4.563.5-1.281c.202.25.282.586.172.89l-.296.797.937.344.297-.797c.34-.953-.139-2.035-1.078-2.438l-1.297-.546-.016-.016h-.015a2.167 2.167 0 0 0-.641-.125h-.031L4.53 3.203a1.266 1.266 0 0 1-.625-.312l-.203-.188A.99.99 0 0 0 4 2a1 1 0 0 0-1-1Zm4.5 0a1 1 0 1 0-.001 1.999A1 1 0 0 0 7.5 1Z"
    />
  </Svg>
);
