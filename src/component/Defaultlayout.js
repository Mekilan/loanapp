import React, { Fragment } from "react";
import AppHeader from "./AppHeader";
import RouteComponent from "./routes/RouteComponent";

const Defaultlayout = () => {
  return (
    <Fragment>
      <AppHeader />
      <RouteComponent />
    </Fragment>
  );
};

export default Defaultlayout;
