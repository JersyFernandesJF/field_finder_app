import React from "react";
import MapViewDirections from "react-native-maps-directions";

export interface DirectionsProps {
  destination: any;
  origin: any;
  onReady: any;
}

export const Directions: React.FC<DirectionsProps> = ({
  destination,
  origin,
  onReady,
}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBLROUu9avV4AZwd8xOfbqc6jFZjZS9hKc"
    strokeWidth={3}
  />
);
