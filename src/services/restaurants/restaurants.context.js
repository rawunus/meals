import React, { useState, useEffect, createContext, useContext } from "react";

import {
  restaurentsReaquest,
  restaurantsTransform,
} from "./restaurants.services";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurentsReaquest(loc)
        .then(restaurantsTransform)
        .then((data) => {
          setIsLoading(false);
          setRestaurants(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 4000);
  };

  useEffect(() => {
    if (location) {
      const locationFormat = `${location.lat},${location.lng}`;
      retriveRestaurants(locationFormat);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
