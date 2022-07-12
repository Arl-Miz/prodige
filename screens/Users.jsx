import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Users = ({ navigation, route }) => {
  return (
    <View
      key={route.params?.title}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 52 }}>Users</Text>
      <View
        style={{
          marginVertical: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: `${route.params?.pic}` }}
          style={{ width: 120, height: 120, borderRadius: 200 }}
        />
        <Text style={styles.txt}>{route.params?.title}</Text>
        <Text style={styles.txt}>{route.params?.first}</Text>
        <Text style={styles.txt}>{route.params?.last}</Text>
        <Text style={styles.txt}>{route.params?.email}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              marginTop: 40,
              padding: 20,
              backgroundColor: "#bd7fea",
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 51 }}>Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  txt: {
    marginVertical: 10,
    fontSize: 26,
  },
});
