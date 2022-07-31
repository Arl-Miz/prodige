import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GloabalContext } from "../context/ContextProvider";
import LottieView from "lottie-react-native";

import menusi from "../context/menus";

const menus = menusi;

import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();
const AddForm = ({ navigation }) => {
  const { addItem, tasks } = useContext(GloabalContext);

  const buttonRef = useRef(null);

  const [todo, setTodo] = useState("");
  const [loading, setLoanig] = useState(true);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);
  const Add = (todo) => {
    if (todo) {
      console.log(todo);
      buttonRef.current?.reset();
      buttonRef.current?.play(0, 180);
      db.transaction((tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [todo]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      });
      //   setTimeout(() => {
      //   addItem(todo);

      //   }, 3000);
      //   Alert.alert("Detail", "Item added", [{ text: "OK", onPress: () => {} }]);
    }
  };
  const handleChange = (e) => {
    setTodo(e);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoanig(false);
    }, 3000);
  }, []);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          source={require("../../assets/lottie/97952-loading-animation-blue.json")}
          style={[{ width: "100%", aspectRatio: 1 }]}
          autoPlay
          loop
          // {...lottieProps}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AddForm</Text>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: 300 }}>
          <TextInput
            type="text"
            onChangeText={(e) => handleChange(e)}
            className="todo-input"
            value={todo}
            style={{
              marginHorizontal: 25,
              marginVertical: 10,
              borderWidth: 1,
              padding: 7,
              // margin: 15,
              fontSize: 19,
              borderRadius: 6,
            }}
          />
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            marginVertical: 30,
            // paddingHorizontal: 40,
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => Add(todo)}
            >
              <LottieView
                ref={buttonRef}
                source={require("../../assets/lottie/add.json")}
                style={{ flex: 1 }}
                autoPlay={false}
                loop={false}
                //   speed={3}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ ...styles.floatingButton }}
              onPress={() => navigation.navigate("todo")}
            >
              <LottieView
                //   ref={buttonRef}
                source={require("../../assets/lottie/task.json")}
                style={{ flex: 1, width: 100 }}
                autoPlay
                loop
                //   speed={3}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 9,

    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginVertical: 10,
  },
  floatingButton: {
    height: 50,
    width: 50,
    marginHorizontal: 60,
    backgroundColor: "black",
    borderRadius: 30,
    shadowOpacity: 0.09,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 10,
    elevation: 5,
    // position: "absolute",
    // bottom: 64,
    // right: 32,
  },
});
