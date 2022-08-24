import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/TextComponent";

const MapCallout = styled.View`
    padding: ${(props) => props.theme.space[1]};
`;
const IosImage = styled(Card.Cover)`
    width: 220px;
    height: 140px;
    padding: ${(props) => props.theme.space[0]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;
const AndroidImage = styled(WebView)`
    width: 220px;
    height: 140px;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

const isAndroid = Platform.OS === "android";
export const MapViewCallout = ({ restaurant }) => {
    const Image = isAndroid ? AndroidImage : IosImage;
    return (
        <MapCallout key={restaurant.name}>
            <Image
                key={restaurant.name}
                source={{ uri: restaurant.photos[0] }}
            />
            <Text variant="caption">{restaurant.name}</Text>
        </MapCallout>
    );
};
