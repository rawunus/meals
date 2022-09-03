import { TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { SafeArea } from "../../../components/utility/SafeAreaViewComponent";
import { Text } from "../../../components/typography/TextComponent";
import RestaurentInfo from "../../components/RestaurentInfo";

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const AvatarWrapper = styled.View`
  align-items: center;
`;

const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurentList
          data={favourites}
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
      ) : (
        <AvatarWrapper>
          <Text>No Favourites yet</Text>
        </AvatarWrapper>
      )}
    </SafeArea>
  );
};

export default FavouritesScreen;
