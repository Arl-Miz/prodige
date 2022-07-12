import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";

import Carousel from "react-native-snap-carousel";

import axios from "axios";

const BIMAGE_URL = "https://picsum.photos/";
const PEOPLE_URL = "https://randomuser.me/api/?results=16";

const { width, height } = Dimensions.get("screen");

import Feather from "react-native-vector-icons/Feather";

const Drawer = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const fetchPeople = async () => {
    axios
      .get(PEOPLE_URL)
      .then(function (response) {
        const res = response.data.results;

        setUser(res);
      })
      .catch(function (error) {
        if (error.response)
          // error from server
          console.log(error.response.data.message);
        else console.log("Error Occured. Please try Again.!"); // error from app side
      });
  };
  const configurationObject2 = {
    method: "get",
    url: `${BIMAGE_URL}/v2/list?limit=10`,
  };

  const fetchData = async () => {
    try {
      const response = await axios(configurationObject2);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchPeople();
  }, []);

  const carouselRef = useRef();
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.download_url }}
          //   source={{ uri: item.url }}
          style={{
            height: 200,
            width: width / 1.3,
            borderRadius: 10,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        top: "3%",
        // marginTop: 50,
        margin: 30,

        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>Hello Jeffi!!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Users")}>
          <ImageBackground
            source={require("../assets/log_in.png")}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderColor: "#C6C6C6",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <Feather
          name="search"
          size={20}
          color="#C6C6C6"
          style={{ marginRight: 5 }}
        />
        <TextInput placeholder="Search" />
      </View>
      <View
        style={
          {
            //   flexDirection: "row",
            //   justifyContent: "center",
            //   alignItems: "center",
          }
        }
      >
        <View>
          <Carousel
            layout="default"
            ref={carouselRef}
            data={data}
            renderItem={renderItem}
            sliderWidth={width - 40}
            itemWidth={width - 86}
            loop={true}
            swipeThreshold={10}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.5}
            containerCustomStyle={{
              overflow: "visible",
              marginVertical: 14,
            }}
          />
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            style={{ padding: 20 }}
          >
            {user.map((props) => {
              return (
                <Users
                  key={props.login.uuid}
                  firstName={props.name.first}
                  lastName={props.name.last}
                  onPress={() =>
                    navigation.navigate("Users", {
                      pic: props.picture.large,
                      title: props.name.title,
                      first: props.name.first,
                      last: props.name.last,
                      email: props.email,
                    })
                  }
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const Users = ({ firstName, lastName, key, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "#2be66cdd",
        borderRadius: 20,
        flexDirection: "row",
        marginVertical: 20,

        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginLeft: 30,
          fontSize: 15,
        }}
      >
        {firstName} {lastName}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            paddingRight: 11,
            paddingLeft: 11,
            marginRight: 30,
            backgroundColor: "#f3dd39",
            height: "70%",
            borderRadius: 9,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Pressme
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
