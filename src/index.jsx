import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./app/components/UserProvider/UserProvider";

ReactDOM.render(
  <UserProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </UserProvider>,
  document.getElementById("root")
);
