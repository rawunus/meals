import React, { useContext } from "react";

//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../../services/auth/auth.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SafeArea } from "../../components/utility/SafeAreaViewComponent";
import { RestaurantNav } from "./restaurant.nav";
import MapScreen from "../../features/map/screens/MapScreen";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Setting: "settings",
};

function Setting() {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeArea>
      <Text>setting Details Screen</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Button title="Logout" onPress={() => onLogout()} />
    </SafeArea>
  );
}

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// create tab bottom  screenOptions
const createTabOptions = ({ route }) => ({
  tabBarIcon: ({ size, color }) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} color={color} size={size} />;
  },

  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

// Tab bBottom Navigation
export const TabBottom = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createTabOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNav} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Setting" component={Setting} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
