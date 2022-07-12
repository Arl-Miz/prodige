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
  Text,
} from "react-native";
import axios from "axios";

const BASE_URL = "https://picsum.photos";

const Images = [
  {
    id: 0,
    title: "Meant balls it if up doubt small purse",
    descriptions:
      "Required his you put the outlived answered position. An pleasure exertion if believed provided to.",
    url: "https://cdn-icons-png.flaticon.com/512/4359/4359857.png",
  },
  {
    id: 1,
    title: "oor no. Attended overcame r",
    descriptions:
      "Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am?",
    url: "https://cdn-icons-png.flaticon.com/512/6064/6064971.png",
  },
  {
    id: 2,

    title: "ssary as. Over w",
    descriptions:
      "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
    url: "https://cdn-icons-png.flaticon.com/512/6397/6397070.png",
  },
  {
    id: 3,
    title: "somethingsomething",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/4105/4105448.png",
  },
  {
    id: 4,
    title: "somethingsomething",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum beatae, perspiciatis tenetur unde dolores?",
    url: "https://cdn-icons-png.flaticon.com/512/5020/5020506.png",
  },
];

const { width, height } = Dimensions.get("screen");

const App = () => {
  const [loadin, setLoadin] = useState(true);
  const [data, setData] = useState([]);

  const configurationObject = {
    method: "get",
    url: `${BASE_URL}/v2/list?limit=4`,
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
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        key={item.id}
                        style={{
                          padding: 10,
                          borderRadius: 9,
                          backgroundColor: "#0000008f",
                          top: height / 6,
                          width: "90%",
                        }}
                      >
                        <Text style={{ fontSize: 23, color: "#fff" }}>
                          {Images[data.indexOf(item)].title}
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: 10,
                          borderRadius: 9,
                          bottom: height / 4,
                          width: "90%",
                          backgroundColor: "#0000008f",
                          // justifyContent: "center",
                          // alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 23, color: "#fff" }}>
                          {Images[data.indexOf(item)].descriptions}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
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
    // justifyContent: "center",
    alignItems: "center",
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
