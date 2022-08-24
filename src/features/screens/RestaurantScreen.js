import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

import { SafeArea } from "../../components/utility/SafeAreaViewComponent";
import RestaurentInfo from "../components/RestaurentInfo";
import Search from "../components/Search.Component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import FavouriteBar from "../components/favourites/FavouriteBar";

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled.ActivityIndicator`
  margin-left: 0px;
`;

const LoadingContiner = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContiner>
          <Loading animating={true} color={Colors.red800} />
        </LoadingContiner>
      )}
      <Search
        isFavouriteToggle={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavouriteBar favourites={favourites} />}
      <RestaurentList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurantsdetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurentInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
