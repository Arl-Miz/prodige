import * as React from "react";
import { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Animated,
  Dimensions,
  Image,
  Text,
  View,
} from "react-native";

const BASE_URL = "https://picsum.photos";
const API_URL = "https://picsum.photos/v2/list?limit=5";

const Images = [
  {
    id: 0,
    title: "Explore the world!!",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/4359/4359857.png",
  },
  {
    id: 1,
    title: "Play with your friends!!",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/6064/6064971.png",
  },
  {
    id: 2,

    title: "Learn new things with US!!",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/6397/6397070.png",
  },
  {
    id: 3,
    title: "build new stuff!",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/4105/4105448.png",
  },
  {
    id: 4,
    title: "Enjoy",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/5020/5020506.png",
  },
];
const bgc = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <BackSet scrollX={scrollX} />
      <AnimeBg scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        data={Images}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <View style={styles.imagelogo}>
              <View style={{ flex: 0.7 }}>
                <Image source={{ uri: item.url }} style={styles.image} />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text style={styles.text}> {item.title} </Text>
                <Text
                  style={{ fontSize: 24, color: "#f0f0ff", marginVertical: 14 }}
                >
                  {item.descriptions}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
      <Tabs navigation={navigation} />
    </View>
  );
};

const Tabs = ({ navigation }) => {
  return (
    // <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
    //   <View style={styles.circleGradient}>
    //     <Text style={styles.visit}>Tabs</Text>
    //   </View>
    // </TouchableOpacity>
    <View style={styles.circleGradient}>
      <Button
        color="#000000"
        title="Get started"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
};
const Indicator = ({ scrollX }) => {
  return (
    <Animated.View
      style={{ position: "absolute", bottom: 86, flexDirection: "row" }}
    >
      {Images.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.8, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              margin: 10,
              opacity,
              transform: [{ scale }],
            }}
          ></Animated.View>
        );
      })}
    </Animated.View>
  );
};
const AnimeBg = ({ scrollX }) => {
  const rotateRange = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = rotateRange.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["-35deg", "35deg", "-35deg"],
  });
  const translateX = rotateRange.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "#01010113",
        borderRadius: 88,
        position: "absolute",
        top: -height * 0.57,
        left: -height * 0.3,
        transform: [{ rotate }],
      }}
    ></Animated.View>
  );
};

const BackSet = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgc.map((_, i) => i * width),
    outputRange: bgc.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  circleGradient: {
    position: "absolute",
    bottom: 40,
    width: "80%",
    backgroundColor: "#000000aa",
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: "#008f68",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { textAlign: "center", marginVertical: 8 },
  loading: {
    flex: 1,
    justifyContent: "center",
    transform: [{ scale: 3 }],
  },

  imgContainer: {
    width,
    height,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: width / 1.7,
    height: height / 1.7,

    resizeMode: "contain",
  },

  imagelogo: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#676767",
    margin: 10,
  },
  ActiveIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#dedada",
    margin: 10,
  },
  text: {
    color: "#f0f0ff",
    fontSize: 34,
    marginBottom: 10,
  },
});

export default Home;
