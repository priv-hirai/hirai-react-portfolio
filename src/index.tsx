import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import "./assets/scss/layout.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "ress";
import "sanitize.css";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
