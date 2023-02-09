import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlockProps = ViewProps & {
  flex?: ViewStyle["flex"];
  safe?: boolean;
  center?: boolean;
};

export const Block: React.FC<BlockProps> = ({
  style,
  flex,
  safe,
  center,
  children,
  ...props
}) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    center !== undefined && { justifyContent: "center", alignItems: "center" },
    style,
  ]) as ViewStyle;

  if (safe) {
    return (
      <SafeAreaView style={blockStyle} {...props}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};
