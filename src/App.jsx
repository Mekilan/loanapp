import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./component/auth/Login";
import Defaultlayout from "./component/Defaultlayout";


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Defaultlayout />} />
      </Routes>
    </Fragment>
  );
};

export default App;
