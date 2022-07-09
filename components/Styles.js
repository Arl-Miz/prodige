import { StyleSheet, Dimensions } from "react-native-web";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    transform: [{ scale: 3 }],
  },

  imgContainer: {
    width,
    height,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: width / 1.7,
    height: height / 1.7,

    resizeMode: "contain",
  },

  imagelogo: {
    height,
    alignItems: "center",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#676767",
    margin: 10,
  },
  ActiveIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#dedada",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 34,
    marginBottom: 10,
  },
});
