import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { privateRoutes } from "./routes/index";
import PrivateRoute from "./routes/PrivateRoute";

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
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
