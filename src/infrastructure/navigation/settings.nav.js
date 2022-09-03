import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import SetttingScreen from "../../features/settings/screens/SettingScreen";
import FavouritesScreen from "../../features/settings/screens/FavouritesScreen";
import CameraScreen from "../../features/settings/screens/CameraScreen";

const Stack = createStackNavigator();

export const SettingNav = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Setting"
        component={SetttingScreen}
      />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};
