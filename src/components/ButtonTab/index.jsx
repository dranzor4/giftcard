import React, { useEffect, useState } from "react";
import "./ButtonTab.css";
import Button from "../Button/Button";
const ButtonTab = ({ data, selected, defaultSelected}) => {
  const [activeButton, setActiveButton] = useState();
  
  useEffect(() => {
    selected(defaultSelected);
    setActiveButton(defaultSelected)
  }, []);
  
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    selected(buttonId);
  };

  return (
    <div className="buttonTabContainer">
      <div className="buttonContainer">
        {data.map((data) => {
          return (
            <Button
              key={data.id}
              className={
                activeButton === data.id ? "afterClick" : "initial"
              }
              handleClick={() => {
                handleButtonClick(data.id);
              }}
            >
              {data.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonTab;
