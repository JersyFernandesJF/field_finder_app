import { useEffect, useState } from "react";
import { Animated, ScrollView, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Block, Button, CardIformation } from "~/components";
import * as Location from "expo-location";
import { MainStackOnTabParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LocationDeltaType = {
  latitudeDelta: number;
  longitudeDelta: number;
};


type Props = NativeStackScreenProps<MainStackOnTabParamsList, "Fields">;

export const HomeScreen = ({ navigation }: Props) => {
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
      <MapView showsUserLocation loadingEnabled style={styles.map}></MapView>
      <Block
        ml={20}
        style={{
          position: "absolute",
          bottom: 20,
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          
        >
          {Array(4)
            .fill(1)
            .map((_, index) => {
              return (
                <Button
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("FieldsDetails")}
                >
                  <CardIformation
                    name="St. Bento"
                    price={25}
                    longCard
                    imageSource={require("../../assets/image/onboarding/onboarding2.png")}
                  />
                </Button>
              );
            })}
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    alignItems: "center", 
    justifyContent: "center"
  },
});