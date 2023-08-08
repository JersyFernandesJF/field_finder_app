import { useTheme } from "~/hooks/theme";
import { Pressable } from "react-native";
import { SaveSVGIcon } from "~/assets/icons";
import { useState } from "react";

export const SaveButton: React.FC = ({ ...props }) => {
  const { colors, fonts } = useTheme();
  const [save, setSave] = useState(true);
  return (
    <Pressable onPress={() => setSave(!save)}>
      <SaveSVGIcon save={save} />
    </Pressable>
  );
};
