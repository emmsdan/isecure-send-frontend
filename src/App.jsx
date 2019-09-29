import React, { useRef } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import logo from "./assets/logo.png";
import "./App.scss";

const App = () => {
  const inputFileRef = useRef(null);
  return (
    <React.Fragment>
      <img alt="secure-sharer" src={logo} className="logo" />
      <div className="main" onClick={() => inputFileRef.current.click()}>
        <div className="download-background">
          <span></span>
          <div className="content">
            <CloudUploadIcon className="icon" />
            <br />
            <h2>Drag and Drop files here</h2>
            <Button
              variant="contained"
              size="large"
              className="button"
              onClick={() => inputFileRef.current.click()}
            >
              SELECT FILE
            </Button>
            <input ref={inputFileRef} type="file" style={{ display: "none" }} />
          </div>
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
