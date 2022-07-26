import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";

const AnimatedWrapper = ({
  children,
  showAnimation,
  containerStyle,
  textStyle,
  title,
  style,
  ...lottieProps
}) => {
  let [fontsLoaded] = useFonts({
    EduVICWANTBeginner: require("../../assets/fonts/EduVICWANTBeginner-VariableFont_wght.ttf"),
  });

  if (!showAnimation) return <>{children}</>;

  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30%",
        },
        containerStyle,
      ]}
    >
      <LottieView
        style={[{ width: "100%", aspectRatio: 1 }, style]}
        autoPlay
        loop
        {...lottieProps}
      />
      {title && (
        <Text
          style={[
            {
              fontFamily: "EduVICWANTBeginner",
              fontSize: 25,
              fontWeight: "300",
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default AnimatedWrapper;

const styles = StyleSheet.create({});
