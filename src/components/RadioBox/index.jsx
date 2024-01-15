

// CustomToggle.js

import React from 'react';
import './RadioBox.css';
const RadioBox = ({ options, selectedOption, onOptionChange, className }) => {
  return (
    <div className={`custom-toggle ${className ? className : ''} ${options.length > 1 ? 'grouped' : ''}` }>
      {options.map((option,index) => (
        <label key={index} className={`toggle-option ${option.value === selectedOption ? 'selected' : ''}`}>
          <input
            type="radio"
            name="custom-toggle"
            value={option.value}
            checked={option.isSelected || option.value === selectedOption}
            onChange={onOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioBox;
