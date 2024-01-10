import React, { useState } from "react";
import styles from "./ButtonTab.module.css";
import Button from "../Button/Button";
const BuySell = ({ className,data }) => {
  
  const [activeButton, setActiveButton] = useState(data[0].name);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.buttonTabContainer}>
      <div className={styles.buttonContainer}>
        {data.map((data, index) => {
          return (
            <Button
              key={data.id}
              className={activeButton === data.name ? styles.afterClick : styles.initial}
              handleClick={()=>{handleButtonClick(data.name)}}
            >
              {data.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BuySell;
