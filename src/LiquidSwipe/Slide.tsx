import Color from "color";
import { useFonts } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Svg, { RadialGradient, Defs, Rect, Stop } from "react-native-svg";

const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;
import LottieView from "lottie-react-native";
export interface SlideProps {
  slide: {
    color: string;
    title: string;
    description: string;
    picture: ReturnType<typeof require>;
  };
}

const Slide = ({
  slide: { picture, color, title, description },
}: SlideProps) => {
  //   let [fontsLoaded] = useFonts({
  //     EduVICWANTBeginner: require("../../assets/fonts/EduVICWANTBeginner-VariableFont_wght.ttf"),
  //   });
  const lighterColor = Color(color).lighten(0.94).toString();
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        {/* <Image source={picture} style={styles.image} /> */}
        <LottieView
          source={picture}
          style={[{ width: "100%", aspectRatio: 1 }]}
          autoPlay
          loop
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    // fontFamily: "EduVICWANTBeginner",
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    // fontFamily: "EduVICWANTBeginner",
  },
});

export default Slide;
