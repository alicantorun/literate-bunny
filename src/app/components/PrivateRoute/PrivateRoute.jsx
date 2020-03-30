import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../UserProvider/UserProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userState } = useUserContext();

  return (
    <Route
      {...rest}
      render={props =>
        userState.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location, status: "You should login" }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
