import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Animated,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  View,
} from "react-native";
import axios from "axios";

const BASE_URL = "https://picsum.photos";
// const API_URL = "https://picsum.photos/v2/list?page=2&limit=100grayscale";

const { width, height } = Dimensions.get("screen");

const App = () => {
  const [loadin, setLoadin] = useState(true);
  const [data, setData] = useState([]);

  const configurationObject = {
    method: "get",
    url: `${BASE_URL}/v2/list?page=2&limit=100grayscale`,
  };
  const fetchData = async () => {
    try {
      const response = await axios(configurationObject);
      setData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadin(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={[loadin ? styles.loading : null]}>
      {loadin ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={32}
            data={data}
            keyExtractor={(id) => id.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.imgContainer}>
                  <ImageBackground
                    source={{ uri: item.download_url }}
                    style={styles.backgroundImage}
                  ></ImageBackground>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    height,
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
    color: "white",
    fontSize: 34,
    marginBottom: 10,
  },
});

export default App;
