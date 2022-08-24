import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabBottom } from "./navigator";
import { AccountNavigator } from "./auth.nav";

import { AuthContext } from "../../services/auth/auth.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabBottom /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
