import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchbarView = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    width: 100%;
    margin-top: ${(props) => props.theme.space[4]};
`;

const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchbarView>
            <Searchbar
                placeholder="Search Location"
                icon="map"
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
