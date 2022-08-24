import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouriteIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 999;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((f) => f.placeId === restaurant.placeId);
  return (
    <View>
      <FavouriteIcon
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={22}
          color={isFavourite ? "red" : "white"}
        />
      </FavouriteIcon>
    </View>
  );
};

export default Favourite;
