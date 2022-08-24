import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantScreen from "../../features/screens/RestaurantScreen";
import RestaurantDetailScreen from "../../features/screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNav = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="Restaurantsdetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
