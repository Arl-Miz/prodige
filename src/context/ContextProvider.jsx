import React, { createContext, useEffect, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import AppReducer from "./AppReducer";

export const GloabalContext = createContext();

const menu = [...Array(2)].map(() => ({
  id: faker.database.mongodbObjectId(),
  name: faker.name.firstName(),
  avatar: faker.image.avatar(),
  food: faker.image.food(360, 234, true),
  price: faker.commerce.price(100, 1000, 2, "$"),
}));
const initailState = {
  menu: menu,
};
// console.log(initailState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);
  const [items, setItems] = useState([]);
  //   useEffect(() => {
  //   }, []);
  function addItem(menu) {
    dispatch({
      type: "ADD_ITEM",
      payload: menu,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  return (
    <GloabalContext.Provider value={{ menu: state.menu, removeItem, addItem }}>
      {children}
    </GloabalContext.Provider>
  );
};
