import React from "react";
import ReactDOM from "react-dom/client";

import Myroute from "./Myroute";

import NewCart from "./redux/NewCart";
//it helps to know the compiler that our reducer is a store
import { createStore } from "redux";
import { Provider } from "react-redux";
//provides data from reducer to components
import cartReducer from "./redux/reducer/cartReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const reducerData = createStore(cartReducer);
root.render(
  <>
    {/* <Myroute /> */}

    <Provider store={reducerData}>
      <Myroute />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
