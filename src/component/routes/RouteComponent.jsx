import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "../../rotues";

const RouteComponent = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<PrivateRoute />}>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  name={route.name}
                  exact={route.exact}
                  element={<route.element />}
                />
              )
            );
          })}
        </Route>
      </Routes>
    </Fragment>
  );
};

export default RouteComponent;
