import React from "react";
import "./NormalInput.css";
const NormalInput = ({ placeholder }) => {
  return (
    <div className="normalInput">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default NormalInput;
