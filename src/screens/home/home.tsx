import { useEffect, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  Block,
  Button,
  CardIformation,
  Input,
  Text,
  Directions,
  PointEvent,
} from "~/components";
import * as Location from "expo-location";
import { PinSVGIcon } from "~/assets/icons";
import { MainStackParamsList } from "~/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSportsList } from "~/config/firebase/Providers/SportsProvider";
import { useFieldsList } from "~/config/firebase/Providers/FieldsProvider";
import { useEventList } from "~/config/firebase/Providers/EventProvider";
import { useNavigation } from "@react-navigation/native";
import { FilterIcons } from "~/assets/icons/sports";
import { eventPlace, handleSearch } from "~/config/googleAPI/googleServices";
import { useTheme } from "~/hooks/theme";

type LocationDeltaType = {
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = NativeStackScreenProps<MainStackParamsList, "HomeTabs">;

export const HomeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<Props["navigation"]>();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [showCardInformation, setShowCardInformation] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sports, setSports] = useState(useSportsList());
  const [fields, setFields] = useState(useFieldsList());
  const [errorMsg, setErrorMsg] = useState("");
  const [event, seEvents] = useState(useEventList());

  const destination = [
    { latitude: 41.1423411, longitude: -8.6317603 },
    { latitude: 41.1565632, longitude: -8.6293085 },
    { latitude: 41.1679527, longitude: -8.6865483 },
    { latitude: 41.1530112, longitude: -8.6280178 },
    { latitude: 41.1554843, longitude: -8.6173559 },
    { latitude: 41.1594964, longitude: -8.6192736 },
    { latitude: 41.1718485, longitude: -8.6947784 },
    { latitude: 41.1626996, longitude: -8.6887401 },
    { latitude: 41.1492501, longitude: -8.6028047 },
    { latitude: 41.1586125, longitude: -8.6341311 },
    { latitude: 41.1651968, longitude: -8.6761584 },
    { latitude: 41.1698316, longitude: -8.6045752 },
    { latitude: 41.1548059, longitude: -8.6241646 },
    { latitude: 41.163219, longitude: -8.6533487 },
    { latitude: 41.1444013, longitude: -8.6595308 },
    { latitude: 41.1357328, longitude: -8.6103521 },
    { latitude: 41.1557958, longitude: -8.6211189 },
    { latitude: 41.1705167, longitude: -8.6749572 },
    { latitude: 41.1461492, longitude: -8.6521727 },
  ];

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
      <StatusBar barStyle="dark-content" />
      <MapView
        showsUserLocation
        tintColor={colors.green[1]}
        loadingEnabled
        style={styles.map}
        mapPadding={{
          top: 30,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {destination && (
          <Directions
            origin={location}
            destination={destination}
            onReady={() => {}}
          />
        )}
        {sports.map((_, index) => {
          return (
            <Marker coordinate={destination[index]} anchor={{ x: 0, y: 0 }}>
              <PointEvent />
            </Marker>
          );
        })}
      </MapView>
      <Block center position="absolute" top={Platform.OS === "ios" ? 90 : 60}>
        <Input
          left={<PinSVGIcon style={{ marginLeft: 10, marginRight: 10 }} />}
          placeholder="Enter an address, event name, Field or Sport"
          onChangeText={(text) => {
            handleSearch(text).then((data) => {
              setResults(data);
              console.log(results);
            });
          }}
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
