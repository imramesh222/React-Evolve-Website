import React from "react";
//it helps to know the compiler that our reducer is a store
import { createStore, combineReducers } from "redux";
//provides data from reducer to components
import cartReducer from "../redux/reducer/cartReducer";

import studentReducer from "../redux/reducer/studentReducer";

const reducer = combineReducers({
  cartReducer: cartReducer,
  studentReducer: studentReducer,
});

const shopData = createStore(reducer);

export default shopData;
