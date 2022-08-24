import { View, Text, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";

import CompactRestaurantInfo from "../restaurants/CompactRestaurantInfo";
import { Spacer } from "../../../components/spacer/SpacerComponent";

const FavouritesWraooer = styled.View`
  padding: 10px;
`;

const FavouriteBar = ({ favourites }) => {
  if (!favourites.length) return null;
  return (
    <FavouritesWraooer>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => (
          <Spacer key={favourite.name} position="left" size="medium">
            <CompactRestaurantInfo restaurant={favourite} />
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWraooer>
  );
};

export default FavouriteBar;
