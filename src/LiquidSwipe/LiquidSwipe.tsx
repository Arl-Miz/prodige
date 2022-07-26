import React, { useState } from "react";

import Slider from "./Slider";
import Slide from "./Slide";

const slides = [
  {
    color: "#aa69ebe8",
    title: "Dessert Recipes",
    description:
      "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
    picture: require("../../assets/lottie/coding-1.json"),
  },
  {
    color: "#54b9ba",
    title: "Healthy Foods",
    description:
      "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
    picture: require("../../assets/lottie/coding-2.json"),
  },
  {
    color: "#80d781f1",
    title: "Easy Meal Ideas",
    description:
      "explore recipes by food type, preparation method, cuisine, country and more",
    picture: require("../../assets/lottie/coding-3.json"),
  },
  {
    color: "#d02435c9",
    title: "10000+ Recipes",
    description:
      "Browse thousands of curated recipes from top chefs, each with detailled cooking instructions",
    picture: require("../../assets/lottie/coding-4.json"),
  },
  {
    color: "#ed4cffe8",
    title: "Video Tutorials",
    description:
      "Browse our best themed recipes, cooking tips, and how-to food video & photos",
    picture: require("../../assets/lottie/coding-5.json"),
  },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(2);
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
