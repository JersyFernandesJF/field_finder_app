import { useTheme } from "~/hooks/theme";
import { Block } from "./block";
import { Input } from "./input";
import { Text } from "./text";
import { useRef, useState } from "react";
import { ViewStyle } from "react-native";
import PhoneInput from "react-native-phone-number-input";

type InputFormFieldNumber = React.ComponentProps<typeof Input> & {
  label?: string;
};
export const InputFormFieldNumber: React.FC<InputFormFieldNumber> = ({
  label,
  ...props
}) => {
  const { colors, fonts } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);

  const boxStyles = {
    width: "100%",
    borderWidth: 0.5,
    borderColor: colors.dark[2],
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    maxWidth: 365,
  } as ViewStyle;
  const boxTextStyles = {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingVertical: 10,
  } as ViewStyle;

  return (
    <Block>
      <Block style={{ marginBottom: 10 }}>
        <Text
          textAlign="left"
          color={colors.blue[10]}
          font={fonts.inter[500]}
          size={15}
        >
          {label}
        </Text>
      </Block>
      <PhoneInput
        {...props}
        ref={phoneInput}
        defaultValue={phoneNumber}
        containerStyle={boxStyles}
        textContainerStyle={boxTextStyles}
        defaultCode="PT"
        layout="first"
      />
    </Block>
  );
};
