

// CustomToggle.js

import React, { memo } from 'react';
import './RadioBox.css';
const RadioBox = ({ options, selectedOption, onOptionChange, className }) => {
  return (
    <div className={`custom-toggle ${className ? className : ''} ${options.length > 1 ? 'grouped' : ''}` }>
      {options.map((option,index) => (
        <label key={option.value} className={`toggle-option ${option.value === selectedOption ? 'selected' : ''}`}>
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

export default memo(RadioBox);
