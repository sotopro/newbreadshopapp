import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Orders",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
