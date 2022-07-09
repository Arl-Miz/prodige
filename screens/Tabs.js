import { StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Gallery from "./Gallery";

const Tab = createMaterialBottomTabNavigator();

const Login = () => {
  //   const navigation = useNavigation();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="Gallery" component={Gallery} />
    </Tab.Navigator>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { padding: 10, felx: 1, justifyContent: "center" },
});
