import React, { useState } from "react";

import Slider from "./Slider";
import Slide from "./Slide";

const slides = [
  {
    color: "#aa69ebe8",
    title: "hot codes",
    description:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    picture: require("../../assets/lottie/coding-1.json"),
  },
  {
    color: "#54b9ba",
    title: "slim workplace",
    description: "First, solve the problem. Then, write the code.",
    picture: require("../../assets/lottie/coding-2.json"),
  },
  {
    color: "#80d781f1",
    title: "Work Now!",
    description: "Experience is the name everyone gives to their mistakes.",
    picture: require("../../assets/lottie/coding-3.json"),
  },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(1);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;
