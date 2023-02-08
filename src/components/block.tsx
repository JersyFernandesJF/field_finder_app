import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type BlockProps = ViewProps & {
  flex?: ViewStyle["flex"];
};

export const Block: React.FC<BlockProps> = ({ flex, children, ...props }) => {
  const blockStyle = StyleSheet.flatten([flex !== undefined && { flex }]);
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};
