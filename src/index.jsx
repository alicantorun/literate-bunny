import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./app/components/UserProvider/UserProvider";

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </Provider>,
  document.getElementById("root")
);
