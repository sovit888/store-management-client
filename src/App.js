import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { privateRoutes, guestRoutes } from "./routes/index";
import PrivateRoute from "./routes/PrivateRoute";
import GuestRoute from "./routes/GuestRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {privateRoutes.map((value, index) => {
            return (
              <PrivateRoute
                exact
                path={value.path}
                component={value.component}
                key={index}
              />
            );
          })}
          {guestRoutes.map((value, index) => {
            return (
              <GuestRoute
                exact
                path={value.path}
                component={value.component}
                key={index}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
