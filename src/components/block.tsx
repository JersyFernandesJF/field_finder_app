import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlockProps = ViewProps & {
  flex?: ViewStyle["flex"];
  safe?: boolean;
  center?: boolean;
  justifyContent?: ViewStyle["justifyContent"];
  row?: boolean;
  px?: ViewStyle["paddingHorizontal"];
  paddingHorizontal?: ViewStyle["paddingHorizontal"];
  my?: ViewStyle["marginVertical"];
  marginVertical?: ViewStyle["marginVertical"];
  mt?: ViewStyle["marginTop"];
  marginTop?: ViewStyle["marginTop"];
};

export const Block: React.FC<BlockProps> = ({
  style,
  flex,
  safe,
  center,
  justifyContent,
  row,
  px,
  paddingHorizontal,
  my,
  marginVertical,
  mt,
  marginTop,
  children,
  ...props
}) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    center !== undefined && { justifyContent: "center", alignItems: "center" },
    justifyContent !== undefined && { justifyContent },
    row !== undefined && { flexDirection: "row" },
    (px || paddingHorizontal) !== undefined && {
      paddingHorizontal: paddingHorizontal || px,
    },
    (my || marginVertical) !== undefined && {
      marginVertical: marginVertical || my,
    },
    (mt || marginTop) !== undefined && { marginTop: marginTop || mt },
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
