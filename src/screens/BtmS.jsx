import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../components/BottomSheet";

import LottieView from "lottie-react-native";
import LiquidSwipe from "../LiquidSwipe";

export default function BtmS() {
  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-300);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30%",
          }}
        >
          <View style={{}}>
            <TouchableOpacity activeOpacity={0.8} style={{}} onPress={onPress}>
              <LottieView
                source={require("../../assets/lottie/programming-computer.json")}
                style={[{ width: "100%", aspectRatio: 1 }]}
                autoPlay
                loop
              />
            </TouchableOpacity>
          </View>
        </View>
        <BottomSheet ref={ref}>
          <View style={{ flex: 1 }}>
            <LiquidSwipe />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#df5fff8a",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: "white",
    opacity: 0.6,
  },
});
