import { View, Text, Image } from "react-native";
import React from "react";

const ImgRnr = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.data }}
        style={{ height: 500, width: 300, borderRadius: 10 }}
      />
    </View>
  );
};

export default ImgRnr;
