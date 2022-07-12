import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import GetStarted from "./GetStarted";
import signIn from "./SignIn";
import SignUp from "./SignUp";
import Gallery from "./Gallery";
import Drawer from "./Drawer";
import Users from "./Users";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={({ route }) => ({
            tabBarStyle: {
              display: "none",
            },
            title: route.params?.first,
          })}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

const tabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  //   console.log(routeName);
  if (routeName == "Users") {
    return "none";
  }
};

export default StackNavigator;

const styles = StyleSheet.create({});
