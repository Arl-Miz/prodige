import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// import { LogBox } from "react-native";
import "./ignoreWarnings";

// import { Provider } from "react-redux";
// import store from "./src/screens/Todo/store";

import Lott from "./src/screens/Lott";
import Home from "./src/screens/Home";
import Todo from "./src/screens/Todos";
import AddForm from "./src/screens/AddForm";

import { ContextProvider } from "./src/context/ContextProvider";
import BtmS from "./src/screens/BtmS";
import bse from "./src/screens/Bse";
import RNSql from "./src/screens/RNSql";
import Sequel from "./src/sqlite-exmpl/src/Sequel";
// LogBox.ignoreAllLogs();
const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="todo" component={Todo} />
          <Stack.Screen name="base" component={bse} />
          <Stack.Screen name="seq" component={RNSql} />
          <Stack.Screen name="home" component={Home} />
          {/* <Stack.Screen name="seql" component={Sequel} /> */}
          <Stack.Screen name="btms" component={BtmS} />
          <Stack.Screen name="lott" component={Lott} />
          <Stack.Screen name="addForm" component={AddForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
