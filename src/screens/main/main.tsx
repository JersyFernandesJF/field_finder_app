import { Block, Button, Line } from "~/components";
import MapView from "react-native-maps";

export const MainScreen = ({ navigation }: any) => {
  return (
    <Block>
      <MapView
        rotateEnabled
        showsUserLocation
        style={{ width: "100%", height: "100%" }}
      />
    </Block>
  );
};
