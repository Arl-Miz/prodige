import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const TabDrawer = createDrawerNavigator();
import Tabs from "./Tabs";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/GetStarted";

const Stack = createNativeStackNavigator();
import { LogBox } from "react-native";
// LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: true }}
          />

          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: true }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
