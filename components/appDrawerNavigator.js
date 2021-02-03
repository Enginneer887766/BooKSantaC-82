import React from "react";
import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBar from "./customSideBar";
import Settings from '../screens/settingsScreen';
import MyDonationScreen from "../screens/myDonation";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    Settings : {screen: Settings},
    MyDonations : {screen: MyDonationScreen}
  },
  {
    contentComponent: CustomSideBar,
  },
    {
      initialRouteName: "Home",
    },
);
