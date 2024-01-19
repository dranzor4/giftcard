import React, { useRef, useState } from "react";
import useOutsideClick from "../../customHooks/useOutsideClick";
import { dropdownOptions } from "../../utils/constants/constants";
import "./FilterSelect.css";

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const [clicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    setClicked(false);
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="custom-select" ref={dropdownRef}>
      <div
        className="display-value"
        onClick={() => {
          setClicked(!clicked);
          handleOptionSelect(dropdownOptions[0]);
        }}
      >
        <img
          src="/Images/filterIcon.svg"
          alt="Filter Icon"
          className="select-icon before-icon"
        />
        <div className="flterDefaultText">Filter</div>
        <img
          src="/Images/arrow-down.svg"
          alt="Down arrow"
          className="select-icon after-icon"
        />
      </div>
      <div
        className={clicked ? "dropdown-content-show" : "dropdown-content-hide"}
      >
        {dropdownOptions.map((option) => (
          <div
            key={option.value}
            className="customOption"
            onClick={() => {
              setClicked(false);
              handleOptionSelect(option);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSelect;
