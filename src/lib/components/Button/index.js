import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.kind}`}
      data-id={props.id}
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
export default Button;
