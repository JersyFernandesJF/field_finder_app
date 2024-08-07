import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  focused?: boolean;
};

export const HomeSVGIcon: React.FC<Props> = ({ focused }) => {
  if (focused) {
    return (
      <Svg width={18} height={17} fill="none">
        <Path
          d="M9 0c-.342 0-.683.116-.962.349L.3 6.814c-.287.24-.389.658-.198.98a.75.75 0 0 0 1.128.197l7.65-6.39a.188.188 0 0 1 .24 0l7.65 6.391a.751.751 0 0 0 1.142-.221c.174-.318.071-.72-.207-.952L16.5 5.812V2.625a.75.75 0 0 0-.75-.75H15a.75.75 0 0 0-.75.75v1.307L9.962.349A1.496 1.496 0 0 0 9 0Zm0 3L1.5 9.267v5.358c0 1.035.84 1.875 1.875 1.875h3c.622 0 1.125-.502 1.125-1.125v-3.75c0-.412.337-.75.75-.75h1.5c.412 0 .75.338.75.75v3.75c0 .623.502 1.125 1.125 1.125h3c1.035 0 1.875-.84 1.875-1.875V9.267L9 3Z"
          fill="#005C5C"
        />
      </Svg>
    );
  }

  return (
    <Svg width={18} height={17} fill="none">
      <Path
        d="M9 0c-.342 0-.683.116-.962.349L.3 6.814c-.287.24-.389.658-.198.98a.75.75 0 0 0 1.128.197l.27-.224v6.858c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875V7.767l.27.225a.751.751 0 0 0 1.142-.221c.174-.318.071-.72-.207-.952L16.5 5.812V2.625a.75.75 0 0 0-.75-.75H15a.75.75 0 0 0-.75.75v1.307L9.962.349A1.496 1.496 0 0 0 9 0Zm0 1.557c.043 0 .086.015.12.044L15 6.513v7.737a.75.75 0 0 1-.75.75h-3V9.75A.75.75 0 0 0 10.5 9h-3a.75.75 0 0 0-.75.75V15h-3a.75.75 0 0 1-.75-.75V6.513L8.88 1.6A.188.188 0 0 1 9 1.557Z"
        fill="#000"
      />
    </Svg>
  );
};
