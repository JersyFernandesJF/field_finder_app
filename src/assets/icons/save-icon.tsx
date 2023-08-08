import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
type SaveSVGIconProps = {
  save?: boolean;
  props?: SvgProps;
};

export const SaveSVGIcon: React.FC<SaveSVGIconProps> = ({ props, save }) => {
  if (save)
    return (
      <Svg width={16} height={19} fill="none" {...props}>
        <Path
          fill="#005C5C"
          d="M2.01 0c-1.096 0-2 .857-2 1.898L0 19l8-2.85L16 19V1.9C16 .862 15.093 0 14 0H2.01Zm0 1.9H14v14.358L8 14.12l-5.998 2.138L2.01 1.9Z"
        />
      </Svg>
    );
  return (
    <Svg width={16} height={19} fill="none" {...props}>
      <Path
        fill="#005C5C"
        d="M2 0c-.138 0-.272.014-.402.039C.686.216 0 .981 0 1.9V19l8-2.85L16 19V1.9c0-.13-.014-.259-.041-.382-.16-.743-.775-1.327-1.557-1.479A2.104 2.104 0 0 0 14 0H2Z"
      />
    </Svg>
  );
};
