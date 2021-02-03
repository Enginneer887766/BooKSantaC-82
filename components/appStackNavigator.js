import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import BookDonateScreen from "../screens/BookDonateScreen";
import RequestPersonDetails from "../screens/requestPersonDetails";

export const AppStackNavigator = createStackNavigator(
  {
    BookDonateList: { screen: BookDonateScreen },
    RequestPersonDetails: { screen: RequestPersonDetails },
  },
  { initialRouteName: "BookDonateScreen" }
);
