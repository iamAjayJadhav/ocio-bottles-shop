import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvder } from "./StateProvoder";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvder initialState={initialState} reducer={reducer}>
      <App />
    </StateProvder>
  </React.StrictMode>,
  document.getElementById("root")
);
