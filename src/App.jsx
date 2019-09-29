import React from "react";
// import { TouchRipple } from "@material-ui/core/ButtonBase/TouchRipple.js";

import logo from "./assets/logo.png";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <img alt="secure-sharer" src={logo} className="logo" />
      <div className="main">
        <div className="download-background">
          <span></span>
        </div>
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
      </div>
    </React.Fragment>
  );
};

export default App;
