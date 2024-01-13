import React from 'react'
import "./CustomInput.css"

const CustomInput = ({ type = "text", onChange, label, error = true, value, hintShow, hintText, }) => {
  return (
    <>
      {
        type === "text" ?
          <div className={`input-box ${error ? "error" : ""}`}>
           
            <input type={type} required />
            <span>{label}</span>
           
            {hintText && <p className={`input-tip  ${error ? "error" : ""}`}>{hintText}</p>} 
          </div> : <div className={`input-box ${error ? "error" : ""}`}>
            <textarea name="" id="" required cols="30" rows="3"></textarea>
            <span>{label}</span>
           
            {hintText && <p className={`input-tip  ${error ? "error" : ""}`}>{hintText}</p>} 
          </div>

      }
    </>
  )
}

export default CustomInput