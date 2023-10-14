import { CheckSVGIcon } from "~/assets/icons";
import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Text } from "./text";
import { Button } from "./button";
import { PressableProps, Image } from "react-native";
import { CheckInterestSVG } from "~/assets/icons";
import type { ImageSourcePropType } from "react-native";

type checkBoxProps = PressableProps & {
  active?: boolean;
  tittle: string;
  imageSource: ImageSourcePropType;
};

export const CardInterest: React.FC<checkBoxProps> = ({
  active,
  tittle,
  imageSource,
  ...props
}) => {
  const { fonts, colors } = useTheme();

  const CardInterest = {
    color: colors.white,
    fontFamily: fonts.inter[500],
    fontSize: 14,
    height: 130,
    width: 105,
  };

  return (
    <Button {...props} style={CardInterest}>
      <Block center flex={1}>
        <Block
          style={{
            height: 105,
            width: 105,
            alignItems: "flex-end",
            marginBottom: 5,
          }}
        >
          <Image
            source={imageSource}
            style={{
              height: 105,
              width: 105,
              borderRadius: 15,
            }}
            accessibilityIgnoresInvertColors
          />
          <CheckInterestSVG style={{ position: "absolute" }} />
        </Block>

        <Text>{tittle}</Text>
      </Block>
    </Button>
  );
};
