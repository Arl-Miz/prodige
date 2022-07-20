import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import Base from "./src/screens/Base";
import { ContextProvider } from "./src/context/ContextProvider";
import Cart from "./src/screens/Cart";
import AppDrawer from "./src/screens/Drawer";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CustomDrawer" component={AppDrawer} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="base" component={Base} />
          <Drawer.Screen name="cart" component={Cart} />
        </Drawer.Navigator>
      </NavigationContainer> */}
    </ContextProvider>
  );
};

export default App;
