import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gamesReducer";
import detailRedcuer from "./reducers/detailsReducer";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    games: gameReducer,
    detail: detailRedcuer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
