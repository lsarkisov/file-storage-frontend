import React from "react";
import { CardHeader } from "reactstrap";
import FileUpload from "../file-upload";
import "../../assets/styles/master.scss";

const App = () => (
  <div className="container-fluid ">
    <CardHeader className="header">
      <h1>File storage</h1>
    </CardHeader>
    <FileUpload />
  </div>
);

export default App;
