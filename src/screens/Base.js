import * as React from "react";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import Style from "../styles/Style";
import { GloabalContext } from "../context/ContextProvider";

export default function Base() {
  const { menu, removeItem } = useContext(GloabalContext);
  //   console.log(menu);
  const [loaded] = useFonts({
    PrincessSofia: require("../../assets/fonts/PrincessSofia-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  if (menu.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>Cart is empty pls add something!!</Text>
      </View>
    );
  } else {
    return (
      <View style={{ marginTop: "13%" }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
        >
          <Text style={{ fontFamily: "PrincessSofia", fontSize: 30 }}>
            Shopping Cart
          </Text>
        </View>
        <View style={{ height: "0.09%", backgroundColor: "black" }}></View>
        <ScrollView>
          {menu.map((item) => {
            //   console.log(item.food);
            return (
              <View key={item.id} style={styles.container}>
                <Image
                  source={{ uri: item.food }}
                  style={{
                    margin: 15,
                    borderRadius: 12,
                    width: 360,
                    height: 150,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingHorizontal: "1%",
                    marginBottom: 10,
                    alignItems: "center",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{ uri: item.avatar }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginBottom: 14,
                      }}
                    />
                    <Text>{item.name}</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>{item.price}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        removeItem(item.id);
                      }}
                      style={{ height: 40, width: 100, ...Style.button }}
                    >
                      <View>
                        <Text
                          style={{ fontFamily: "PrincessSofia", fontSize: 30 }}
                        >
                          remove!!
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: 20,
  },
});
