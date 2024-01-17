import React from "react";
import "./Accordian.css";
const Accordian = (props) => {
  const { data } = props;
  return (
    <div className="accordianContainer">
      <div className="accordian-Header">
        <div className="header-text">sdvdhvdch</div>
        <img src="/Images/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
  );
};

export default Accordian;
