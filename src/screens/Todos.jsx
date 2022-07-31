import { StatusBar } from "expo-status-bar";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import ListItem from "../components/ListItems";

// const TITLES = [
//   "listen to something",
//   "read something",
//   "coock something",
//   "buy something",
//   "do something",
// ];
import { FontAwesome5 } from "@expo/vector-icons";
import { GloabalContext } from "../context/ContextProvider";

// const TASKS = TITLES.map((title, index) => ({ title, index }));
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

const BACKGROUND_COLOR = "#6ee7e777";

const Todo = ({ navigation }) => {
  // const { tasks } = useContext(GloabalContext);
  const [tsks, setTsks] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(`select * from items ;`, [], (_, { rows: { _array } }) => {
        setTsks(_array);
        // console.log(_array);
      });
    });
  }, [tsks]);
  //   console.log(tasks);
  //   useEffect(() => {
  //     setTsks(tasks);
  //   }, [tasks]);
  const onDismiss = (item) => {
    // console.log(item);
    db.transaction((tx) => {
      tx.executeSql(`delete from items where id = ?;`, [item]);
    });
  };
  // useCallback((task) => {
  // console.log(task);
  // setTsks((tasks) =>
  //   tasks.filter((item) => tsks.indexOf(item) !== tsks.indexOf(task))
  // );
  //   }, []);

  const scrollRef = useRef(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10%",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ left: "150%" }}>
            <Text style={styles.title}>Todos</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("addForm")}>
            <FontAwesome5 name={"plus"} size={40} color={"#333"} />
          </TouchableOpacity>
        </View>
        <ScrollView ref={scrollRef} style={{ flex: 0.55 }}>
          {tsks.map((task) => {
            // console.log(tsks);
            return (
              <ListItem
                simultaneousHandlers={scrollRef}
                key={tsks.indexOf(task)}
                task={task}
                onDismiss={() => onDismiss(task.id)}
              />
            );
          })}
        </ScrollView>
        <View
          style={{ flex: 0.45, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{ ...styles.btn }}
            onPress={() => navigation.navigate("btms")}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.btn_txt}>Go Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    // marginVertical: "12%",
  },
  title: {
    fontSize: 60,
  },
  btn: {
    // position: "absolute",

    width: "80%",
    backgroundColor: "#5dd28a55",
    borderRadius: 90,
  },
  btn_txt: {
    fontSize: 50,
  },
});

export default Todo;
