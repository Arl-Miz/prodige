// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   Button,
//   FlatList,
// } from "react-native";
// // import { openDatabase } from "react-native-sqlite-storage";
// import * as SQLite from "expo-sqlite";
// const db = SQLite.openDatabase({
//   name: "rn_sqlite",
// });

// const RNSql = () => {
//   const [category, setCategory] = useState("");
//   const [categories, setCategories] = useState([]);

//   const createTables = () => {
//     db.transaction((txn) => {
//       txn.executeSql(
//         `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
//         [],
//         (sqlTxn, res) => {
//           console.log("table created successfully");
//         },
//         (error) => {
//           console.log("error on creating table " + error.message);
//         }
//       );
//     });
//   };

//   const addCategory = (item) => {
//     // console.log(item);
//     if (!category) {
//       alert("Enter category");
//       return false;
//     } else {
//       //   console.log(category);
//       db.transaction((txn) => {
//         txn.executeSql(
//           `INSERT INTO categories (name) VALUES (?)`,
//           [item],
//           // txn.executeSql("select * from categories", [], (_, { rows }) =>
//           //   console.log(JSON.stringify(rows))
//           // );
//           (sqlTxn, res) => {
//             console.log(res);
//             console.log(`${category} category added successfully`);
//             getCategories();
//             setCategory("");
//           },
//           (error) => {
//             console.log("error on adding category " + error.message);
//           }
//         );
//         // txn.executeSql("select * from items", [], (_, { rows }) =>
//         //   console.log(JSON.stringify(rows))
//         // );
//       });
//     }
//   };

//   const getCategories = () => {
//     console.log("fi");
//     db.transaction((txn) => {
//       txn.executeSql(
//         "select * from categories",
//         [],
//         (_, { rows }) => console.log("object")
//         // console.log(JSON.stringify(rows))
//       );
//       //   txn.executeSql(
//       //     `SELECT * FROM categories ORDER BY id DESC`,
//       //     [],
//       //     (sqlTxn, res) => {
//       //       console.log("categories retrieved successfully");
//       //       let len = res.rows.length;

//       //       if (len > 0) {
//       //         let results = [];
//       //         for (let i = 0; i < len; i++) {
//       //           let item = res.rows.item(i);
//       //           results.push({ id: item.id, name: item.name });
//       //         }

//       //         setCategories(results);
//       //       }
//       //     },
//       //     (error) => {
//       //       console.log("error on getting categories " + error.message);
//       //     }
//       //   );
//     });
//   };

//   const renderCategory = ({ item }) => {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           paddingVertical: 12,
//           paddingHorizontal: 10,
//           borderBottomWidth: 1,
//           borderColor: "#ddd",
//         }}
//       >
//         <Text style={{ marginRight: 9 }}>{item.id}</Text>
//         <Text>{item.name}</Text>
//       </View>
//     );
//   };

//   useEffect(() => {
//     createTables();
//     // getCategories();
//   }, []);

//   return (
//     <View>
//       <StatusBar backgroundColor="#222" />

//       <TextInput
//         placeholder="Enter category"
//         value={category}
//         // onChangeText={setCategory}
//         onChangeText={(text) => setCategory(text)}
//         onSubmitEditing={() => {
//           addCategory(category);
//           //   setCategory(null);
//         }}
//         style={{ marginHorizontal: 8 }}
//       />

//       <Button title="Submit" onPress={() => addCategory()} />

//       <FlatList
//         data={categories}
//         renderItem={renderCategory}
//         key={(cat) => cat.id}
//       />
//     </View>
//   );
// };

// export default RNSql;

// // import React, { useState, useEffect } from "react";
// // import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
// // import CustomButton from "../sqlite-exmpl/src/utils/CustomButton";
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import SQLite from 'react-native-sqlite-storage';
// // import * as SQLite from "expo-sqlite";

// // const db = SQLite.openDatabase(
// //   {
// //     name: "MainDB",
// //     location: "default",
// //   },
// //   () => {},
// //   (error) => {
// //     console.log(error);
// //   }
// // );

// // export default function Login({ navigation }) {
// //   const [name, setName] = useState("");
// //   const [age, setAge] = useState("");

// //   useEffect(() => {
// //     createTable();
// //     getData();
// //   }, []);

// //   const createTable = () => {
// //     db.transaction((tx) => {
// //       tx.executeSql(
// //         "CREATE TABLE IF NOT EXISTS " +
// //           "Users " +
// //           "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
// //       );
// //     });
// //   };

// //   const getData = () => {
// //     try {
// //       // AsyncStorage.getItem('UserData')
// //       //     .then(value => {
// //       //         if (value != null) {
// //       //             navigation.navigate('Home');
// //       //         }
// //       //     })
// //       db.transaction((tx) => {
// //         tx.executeSql("SELECT Name, Age FROM Users", [], (tx, results) => {
// //           console.log(results);
// //           var len = results.rows.length;
// //           if (len > 0) {
// //             navigation.navigate("Home");
// //           }
// //         });
// //       });
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const setData = async () => {
// //     if (name.length == 0 || age.length == 0) {
// //       Alert.alert("Warning!", "Please write your data.");
// //     } else {
// //       try {
// //         // var user = {
// //         //     Name: name,
// //         //     Age: age
// //         // }
// //         // await AsyncStorage.setItem('UserData', JSON.stringify(user));
// //         await db.transaction(async (tx) => {
// //           // await tx.executeSql(
// //           //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
// //           // );
// //           await tx.executeSql("INSERT INTO Users (Name, Age) VALUES (?,?)", [
// //             name,
// //             age,
// //           ]);
// //         });
// //         // navigation.navigate("Home");
// //         console.log(getData());
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }
// //   };

// //   return (
// //     <View style={styles.body}>
// //       <Image
// //         style={styles.logo}
// //         source={require("../sqlite-exmpl/assets/sqlite.png")}
// //       />
// //       <Text style={styles.text}></Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter your name"
// //         onChangeText={(value) => setName(value)}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter your age"
// //         onChangeText={(value) => setAge(value)}
// //       />
// //       <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   body: {
// //     flex: 1,
// //     alignItems: "center",
// //     backgroundColor: "#0080ff",
// //   },
// //   logo: {
// //     width: 200,
// //     height: 100,
// //     margin: 20,
// //   },
// //   text: {
// //     fontSize: 30,
// //     color: "#ffffff",
// //     marginBottom: 130,
// //   },
// //   input: {
// //     width: 300,
// //     borderWidth: 1,
// //     borderColor: "#555",
// //     borderRadius: 10,
// //     backgroundColor: "#ffffff",
// //     textAlign: "center",
// //     fontSize: 20,
// //     marginBottom: 10,
// //   },
// // });

import { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
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

function Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Completed" : "Todo";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  const [text, setText] = useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example</Text>

      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQlite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="what do you need to do?"
              style={styles.input}
              value={text}
            />
          </View>
          <ScrollView style={styles.listArea}>
            <Items
              key={`forceupdate-todo-${forceUpdateId}`}
              done={false}
              onPressItem={(id) => {
                db.transaction(
                  (tx) => {
                    // tx.executeSql(`delete from items where id = ?;`, [id]);

                    tx.executeSql(`update items set done = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  forceUpdate
                );
              }}
            />
            <Items
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
          </ScrollView>
        </>
      )}
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});
