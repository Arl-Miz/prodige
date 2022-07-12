import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import SignIn from "./screens/SignIn";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gallery from "./screens/Gallery";
import GetStarted from "./screens/GetStarted";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigator from "./screens/StackNavigator";
import Home from "./screens/Home";
const TabDrawer = createDrawerNavigator();
import CustomDrawer from "./screens/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Draw = () => {
  return (
    <TabDrawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <TabDrawer.Screen
        name="HomeDrawer"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <TabDrawer.Screen
        name="barbell"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="barbell" size={22} color={color} />
          ),
        }}
      />
      <TabDrawer.Screen
        name="book-outline"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      <TabDrawer.Screen
        name="settings"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={22} color={color} />
          ),
        }}
      />
    </TabDrawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ top: -40, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      {/* <View
        style={{
          width: 99,
          height: 99,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      > */}
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: "center",
          justifyContent: "center",
          elevation: 9,
          borderRadius: 50,
          backgroundColor: "black",
        }}
      >
        {children}
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const Login = () => {
  return (
    <Tab.Navigator
      screenOptions={
        () => ({
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              position: "absolute",
              bottom: 40,
              left: 20,
              right: 20,
              height: 100,
              elevation: 6,
              borderRadius: 19,
              backgroundColor: "#daeae5",
            },
          ],
        })
        // }
      }
    >
      <Tab.Screen
        name="stackScreen"
        component={StackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            // display: "none",
            display: tabBarVisibility(route),
            position: "absolute",
            bottom: 40,
            left: 20,
            right: 20,
            height: 100,
            elevation: 6,
            borderRadius: 19,
            backgroundColor: "#daeae5",
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.bar_container}>
              <Image
                style={styles.bar_icon}
                source={
                  focused
                    ? require("./assets/Main.png")
                    : require("./assets/Main_nF.png")
                }
              />
              <Text>Main</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Home"
        component={Draw}
        options={({ route }) => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (
            // <View style={styles.bar_container}>
            <Image
              style={{ bottom: 4, ...styles.bar_icon }}
              source={require("./assets/home.png")}
            />
            //   <Text>Sign in</Text>
            // </View>
          ),
          tabBarButton: (props) => <TabButton {...props} />,
        })}
      />

      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.bar_container}>
              <Image
                style={{
                  ...styles.bar_icon,
                }}
                source={
                  focused
                    ? require("./assets/Gallery.png")
                    : require("./assets/Gallery_fN.png")
                }
              />
              <Text>Gallery</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Login;

const tabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  //   console.log(routeName);
  if (routeName == "Users" || routeName == "HomeDrawer") {
    return "none";
  }
};
const styles = StyleSheet.create({
  container: { padding: 10, felx: 1, justifyContent: "center" },
  bar_container: { alignItems: "center", justifyContent: "center" },
  bar_icon: { width: 60, height: 60 },
});
