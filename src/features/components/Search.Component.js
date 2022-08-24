import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../services/location/location.context";

const SearchbarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = ({ isFavouriteToggle, onFavouriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchbarView>
      <Searchbar
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search Location"
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchbarView>
  );
};

export default Search;
