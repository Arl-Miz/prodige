import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import Svg, { Circle, G } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import AnimatedLottieView from "lottie-react-native";
const { width, height } = Dimensions.get("screen");
const R = 700 / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Home = ({ navigation }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, { duration: 2500 });
  }, []);
  const reCall = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, { duration: 2500 });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: 700 * (progress.value * -1),
  }));

  const progressTxt = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  return (
    <View style={styles.container}>
      <ReText style={styles.txt} text={progressTxt} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30%",
          //   width: 330,
          //   height: 330,
          //   backgroundColor: "red",
        }}
      >
        <View style={{ position: "absolute", top: height / 2.5 }}>
          <AnimatedLottieView
            source={require("../../assets/lottie/wave-animation.json")}
            style={[{ width: "100%", aspectRatio: 1 }]}
            autoPlay
            loop
            // {...lottieProps}
          />
        </View>
        <Text>hello</Text>
      </View>
      <Svg>
        <G>
          <Circle
            cx={width / 2}
            cy={height / 2}
            r={R}
            stroke={"#ff0000d6"}
            strokeWidth={35}
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            cx={width / 2}
            cy={height / 2}
            r={R}
            stroke={"#e6366ad5"}
            strokeWidth={35}
            strokeDasharray={1000}
            animatedProps={animatedProps}
            strokeLinecap={"round"}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={{ bottom: "10%", ...styles.btn }}
        onPress={() => reCall()}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.btn_txt}>Start</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ top: "10%", ...styles.btn }}
        onPress={() => navigation.navigate("todo")}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.btn_txt}>Todos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fad46c",
  },
  txt: {
    position: "absolute",
    top: height / 1.9,
    fontSize: 60,
    color: "#325eb1",
    width: 200,
    textAlign: "center",
  },
  btn: {
    position: "absolute",

    width: width / 1.5,
    backgroundColor: "#e0e0e0",
    borderRadius: 90,
  },
  btn_txt: {
    fontSize: 40,
  },
});
