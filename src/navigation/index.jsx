import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

import { AuthScreen } from "../screens";
import Tabs from "./tabs";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  return <NavigationContainer>{userId ? <Tabs /> : <AuthScreen />}</NavigationContainer>;
};

export default AppNavigator;
