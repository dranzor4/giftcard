import React, { useState } from 'react';
import './FLoatingLableInput.css'; // Assuming you have a separate CSS file

const FLoatingLableInput = ({ label, limit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
      />
      <label htmlFor="inputField">{label}</label>
      {limit && (
        <div className="message">
          {inputValue.length}/{limit} characters
        </div>
      )}
    </div>
  );
};

export default FLoatingLableInput;
