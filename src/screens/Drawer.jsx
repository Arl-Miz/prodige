import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import Base from "./Base";
import Cart from "./Cart";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        //   drawerType: "slide",
        headerShown: false,
        //   overlayColor: "transparent",
        //   drawerStyle: {
        //     flex: 1,
        //     width: "65%",
        //     paddingRight: 20,
        //     backgroundColor: "transparent",
        //   },
        //   sceneContainerStyle: { backgroundColor: "transparent" },
      }}
    >
      <Drawer.Screen name="Cart" component={Base} />
      <Drawer.Screen name="Shop" component={Cart} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
