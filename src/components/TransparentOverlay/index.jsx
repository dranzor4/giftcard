import React from "react";
import "./TransparentOverlay.css";
const index = ({ handleClick, isOpen, customeClass }) => {
  return (
    <div
      onClick={() => handleClick()}
      className={`transparentOverlay ${
        isOpen ? "active" : ""
      }  ${customeClass}`}
    ></div>
  );
};

export default index;
