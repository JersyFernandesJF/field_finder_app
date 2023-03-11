import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type Props = {
  focused?: boolean;
};

export const ProfileSVGIcon: React.FC<Props> = ({ focused }) => {
  if (focused) {
    return (
      <Svg width={24} height={24} fill="none">
        <G clipPath="url(#a)" fill="#005C5C">
          <Path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1h12Z" />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }

  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z"
        fill="#000"
      />
    </Svg>
  );
};
