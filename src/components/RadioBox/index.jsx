import React from 'react'
import "./RadioBox.css"
const RadioBox = ({ name, value, label, checked, onChange }) => {
    return (
        <div className="custom-radio-button">
          <input
            type="radio"
            name={name}
            value={value}
            id={value}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={value}>{label}</label>
        </div>
      );
}

export default RadioBox