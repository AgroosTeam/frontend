import styles from "./style";
import MapView, { Callout, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Platform, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import * as Location from "expo-location";

const statusBarHeight = Constants.statusBarHeight;

function MapScreen() {
  const [isLoading, setLoading] = useState(true);
  const [customLatitude, setCustomLatitude] = useState(null);
  const [customLongitude, setCustomLongitude] = useState(null);
  const [renderedParkingPlacesMarkers, setRenderedParkingPlacesMarkers] = useState();

  const parkingPlacesMarkers = [
    {
      latitude: 49.8455084,
      longitude: 24.0438791,
      owner: "Us*** ***ko",
      address: "Sadovskogo 6",
      price: "20 hrn/hour",
      isFree: false,
    },
    {
      latitude: 49.84070168963158,
      longitude: 24.051619718060728,
      owner: "Bo**** *****ka",
      address: "Barvinskih 10",
      price: "19 hrn/hour",
      isFree: true,
    },
  ];

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setCustomLatitude(location.coords.latitude);
      setCustomLongitude(location.coords.longitude);
      setLoading(false);
      setRenderedParkingPlacesMarkers(
        parkingPlacesMarkers.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              pinColor={item.isFree ? "green" : "red"}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("PlaceRent", {
                    owner: item.owner,
                    address: item.address,
                    price: item.price,
                  })
                }
              >
                <View>
                  <Text>Rent</Text>
                </View>
              </Callout>
            </Marker>
          );
        })
      );
    })();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: customLatitude,
            longitude: customLongitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00921,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {renderedParkingPlacesMarkers}
        </MapView>
      )}
    </View>
  );
}

export default MapScreen;
