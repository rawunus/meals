import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/stars";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/SpacerComponent";
import { Text } from "../../components/typography/TextComponent";
import Favourite from "./favourites/Favourite";

import {
  CardItem,
  CardCover,
  Info,
  Section,
  Rating,
  Open,
  Icon,
} from "./restaurentStyles";

const RestaurentInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Spacer position="bottom" size="large">
      <CardItem elevation={4}>
        <Favourite restaurant={restaurant} />
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="title">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((r, i) => (
                <SvgXml key={i} width="20" height="20" xml={star} />
              ))}
            </Rating>

            <Open>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporary</Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
              <Spacer position="left" size="small" />
              <Icon source={{ uri: icon }} />
            </Open>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </CardItem>
    </Spacer>
  );
};

export default RestaurentInfo;
