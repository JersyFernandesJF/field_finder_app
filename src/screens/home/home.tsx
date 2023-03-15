import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Block } from "~/components";
import * as Location from "expo-location";

type LocationDeltaType = {
  latitudeDelta: number;
  longitudeDelta: number;
};

export const HomeScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <Block flex={1}>
      <MapView style={styles.map} />
    </Block>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});