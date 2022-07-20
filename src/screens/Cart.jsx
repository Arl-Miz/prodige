import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import { faker } from "@faker-js/faker";

import { useFonts } from "expo-font";
import Style from "../styles/Style";
import { GloabalContext } from "../context/ContextProvider";
import menusi from "../context/menus";

const menus = menusi;
export default function Cart({ navigation }) {
  const [serach, setSearch] = useState("");
  const [filterData, setFilterData] = useState(menus);
  const { addItem, menu } = useContext(GloabalContext);

  const avatar = faker.image.avatar();
  const { height, width } = Dimensions.get("screen");

  const [loaded] = useFonts({
    PrincessSofia: require("../../assets/fonts/PrincessSofia-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Add = (item) => {
    const theItem = menus.filter((i) => i.id === item);
    addItem(theItem[0]);
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = menus.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(menus);
      setSearch(text);
    }
  };
  return (
    <View style={{ marginTop: "13%" }}>
      <View
        style={{
          marginHorizontal: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 23 }}>
            Hi! <Text style={{ fontWeight: "bold" }}>JEFFI</Text>
          </Text>
          <Text>What do you want today?!</Text>
        </View>
        <Image
          source={require("../../assets/Avatar.png")}
          style={{ width: 40, height: 40, borderRadius: 30 }}
        />
      </View>
      <View style={{}}>
        <TextInput
          style={{
            marginHorizontal: 25,
            marginVertical: 10,
            borderWidth: 1,
            padding: 7,
            // margin: 15,
            fontSize: 19,
            borderRadius: 6,
          }}
          value={serach}
          placeholder="Search"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={() => searchFilterFunction("")}
        />
      </View>
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: width / 2.4,
              height: 260,
              elevation: 15,
              alignItems: "center",
              marginHorizontal: 10,
              marginTop: 30,
              marginBottom: 30,
              borderRadius: 15,
              backgroundColor: "#f0efef",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home", item)}>
              <Image
                source={{ uri: item.food }}
                style={{
                  margin: 15,
                  borderRadius: 12,
                  width: 150,
                  height: 150,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: "3%",
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    marginBottom: 14,
                  }}
                />
                <View style={{ marginBottom: 20 }}>
                  <Text>{item.name}</Text>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>{item.price}</Text>
                <TouchableOpacity
                  onPress={() => Add(item.id)}
                  style={{ height: 30, width: 60, ...Style.button }}
                >
                  <View>
                    <Text style={{ fontFamily: "PrincessSofia", fontSize: 20 }}>
                      Add!!
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      {/* <ScrollView
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
      >
        {menus.map((item) => {
          //   console.log(item.food);
          return (
            <View
              key={item.id}
              style={{
                width: width / 2,
                height: 150,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.food }}
                style={{
                  margin: 15,
                  borderRadius: 12,
                  width: 150,
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
                    onPress={() => Add(item.id)}
                    style={Style.button}
                  >
                    <View>
                      <Text
                        style={{ fontFamily: "PrincessSofia", fontSize: 30 }}
                      >
                        Add!!
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
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
