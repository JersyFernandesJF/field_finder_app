import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import {
  Block,
  Button,
  CardIformation,
  Input,
  Text,
  Directions,
} from "~/components";
import * as Location from "expo-location";
import { PinSVGIcon } from "~/assets/icons";
import { MainStackOnTabParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSportsList } from "~/config/firebase/Providers/SportsProvider";
import { FilterIcons } from "~/assets/icons/sports";
import { handleSearch } from "~/config/googleAPI/googleServices";

type LocationDeltaType = {
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = NativeStackScreenProps<MainStackOnTabParamsList, "Fields">;

export const HomeScreen = ({ navigation }: Props) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sports, setSports] = useState(useSportsList());
  const [errorMsg, setErrorMsg] = useState("");
  const destination = {
    latitude: 41.15,
    longitude: -8.61024,
  };

  useEffect(() => {
    handleSearch(query).then((data) => {
      setResults(data);
    });
  }, [query]);
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

  const listIcons = sports.map((sport) => {
    return sport.name;
  });
  const Icons = FilterIcons(listIcons);
  const setIcon = (name: string) => {
    if (Object.keys(Icons).includes(name)) return Icons[name];
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <Block flex={1} center>
      <MapView showsUserLocation loadingEnabled style={styles.map}>
        {destination && (
          <Directions
            origin={location}
            destination={destination}
            onReady={() => {}}
          />
        )}
      </MapView>
      <Block center position="absolute" top={90}>
        <Input
          left={<PinSVGIcon style={{ marginLeft: 10, marginRight: 10 }} />}
          placeholder="Enter an address, Field or Sport"
          onChangeText={(text) => {
            setQuery(text);
          }}
          value={query}
          standard
        />
        <Block mt={10}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {sports.map((element, index) => {
              return (
                <Button chips>
                  <Block
                    center
                    justifyContent="space-around"
                    paddingHorizontal={10}
                    style={{ flexDirection: "row" }}
                  >
                    {setIcon(element.name)}
                    <Text chips>{element.name}</Text>
                  </Block>
                </Button>
              );
            })}
          </ScrollView>
        </Block>
      </Block>
      <Block
        style={{
          position: "absolute",
          bottom: 20,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {Array(4)
            .fill(1)
            .map((_, index) => {
              return (
                <Button
                  style={{ marginLeft: 10 }}
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
    justifyContent: "center",
  },
});
