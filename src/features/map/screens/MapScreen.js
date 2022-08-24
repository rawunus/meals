import React, { useState, useContext, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import Search from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapViewCallout } from "../components/MapViewCallout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MyCustomCalloutView = styled.Text`
  font-size: 12px;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurants.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurantsdetail", {
                    restaurant,
                  })
                }
              >
                <MapViewCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
      <Search />
    </>
  );
};

export default MapScreen;
