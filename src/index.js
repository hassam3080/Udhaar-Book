import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./App.css"
import UdhaarBook from "./UdhaarBook"
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UdhaarBook/>
{/* <App/> */}
  </Provider>
);
