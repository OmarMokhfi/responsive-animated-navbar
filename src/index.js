import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./lib/components/Button";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Button
      label="Submit"
      kind="primary"
      onClick={() => {
        alert("submit");
      }}
    />
    <Button
      label="Delete"
      kind="danger"
      onClick={() => {
        alert("delete");
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
