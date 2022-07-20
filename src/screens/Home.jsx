import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { GloabalContext } from "../context/ContextProvider";
import { faker } from "@faker-js/faker";
import menusi from "../context/menus";

const menus = menusi;
const Home = ({ navigation, route }) => {
  const [like, setLike] = useState(false);

  const { addItem } = useContext(GloabalContext);

  const Add = (item) => {
    const theItem = menus.filter((i) => i.id === item);
    addItem(theItem[0]);
  };

  const items = route.params;
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={30} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 290,
          }}
        >
          <Image
            source={{ uri: items.food }}
            style={{ width: 220, height: 220, borderRadius: 190 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#dd517b",
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 60,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
              {items.name}
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setLike(!like)}
              >
                {like == true ? (
                  <Ionicons name="heart" color={"red"} size={34} />
                ) : (
                  <Ionicons name="heart-outline" color={"red"} size={34} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>
            or u excited if come him great water want pleasure prudent rapid
            happening hope him jennings ecstatic though wooded are an and
            strangers believe what like more new Not greatest so true preserved
            on thanks attacks tended barton formed saw unknown yet or how but
            half eat from found simplicity So built with finished mr can ask
            Projecting china it too agreed when simplicity Sportsman His
            relation an fact old Winter many how men Necessary he directly going
            Chicken juvenile temper bred are not mean shameless off Full next
            about speaking check as any like led other genius or pleasure
            favourite besides wound may as would ought hundred
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => Add(items.id)}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#d8bd43",
                marginVertical: 20,
                height: 60,
                borderRadius: 40,
              }}
            >
              <Text>Add To Cart!!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingVertical: " 12%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e4e4e4f",
  },
});
