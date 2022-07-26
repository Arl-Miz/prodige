import React, { createContext, useEffect, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import AppReducer from "./AppReducer";

export const GloabalContext = createContext();

const tasks = [
  { title: "listen to something" },
  { title: "read something" },
  { title: "coock something" },
  { title: "buy something" },
  { title: "do something" },
];
import { FontAwesome5 } from "@expo/vector-icons";

// const tasks = TITLES.map((title, index) => ({ title, index }));

// const menu = [...Array(2)].map(() => ({
//   id: faker.database.mongodbObjectId(),
//   name: faker.name.firstName(),
//   avatar: faker.image.avatar(),
//   food: faker.image.food(360, 234, true),
//   price: faker.commerce.price(100, 1000, 2, "$"),
// }));
const initailState = {
  tasks: tasks,
};
// console.log(initailState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);
  const [items, setItems] = useState([]);
  //   useEffect(() => {
  //   }, []);
  function addItem(tasks) {
    dispatch({
      type: "ADD_ITEM",
      payload: tasks,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  return (
    <GloabalContext.Provider
      value={{ tasks: state.tasks, removeItem, addItem }}
    >
      {children}
    </GloabalContext.Provider>
  );
};
