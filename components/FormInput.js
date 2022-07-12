import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const FormInput = (props) => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#eaeaea" }}>{label}</Text>
        {error ? (
          <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput
        {...props}
        placeholderTextColor="#ffffff63"
        placeholder={placeholder}
        style={styles.input}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ffffff",
    height: 35,
    color: "#5bbda5",
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 4,
  },
});

export default FormInput;
