import React from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import * as ROUTES from "./appRoutes";
import Landing from "./screens/Landing/Landing";
import Home from "./screens/Home/Home";
import Dictionary from "./screens/Dictionary/Dictionary";
import Test from "./screens/Test/Test";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import defaultTheme from "../theme/defaultTheme";

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <PrivateRoute exact path={ROUTES.HOME} component={Home} />
        <PrivateRoute exact path={ROUTES.DICTIONARY} component={Dictionary} />
        <PrivateRoute exact path={ROUTES.TEST} component={Test} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
