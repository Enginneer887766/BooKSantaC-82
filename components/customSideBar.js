import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import db from "../config";
import firebase from "firebase";
import { DrawerItems } from "react-navigation-drawer";
import WelcomeScreen from "../screens/WelcomeScreen";

export default class CustomSideBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerItems {...this.props} />
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton} onPress= {()=> {
              this.props.navigation.navigate('WelcomeScreen');
              firebase.auth().signOut();
          }}>
            <Text style = {styles.logOutText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  logOutButton: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  logOutText: { fontSize: 30, fontWeight: "bold" },
});
