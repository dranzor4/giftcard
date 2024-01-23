import React from 'react'
import "./CustomInput.css"

const CustomInput = ({ type = "text", onChange, label, error = false, value, hintShow, hintText, }) => {
  return (
    <>
      {
        type === "text" && <>
         <div className={`input-box ${error ? "error" : ""}`}>
           
           <input type={type} required onChange={onChange} value={value}/>
           <span>{label}</span>
          
           {hintText && <p className={`input-tip  ${error ? "error" : ""}`}>{hintText}</p>} 
         </div></>
      }
      {
        type === "textarea" && <>
        <div className='input-box'>
            <textarea name="" id="" required cols="30" rows="3"></textarea>
            <span>{label}</span>
            {/* {error === "" ? hintShow ? <p className='input-tip'>{hintText}</p> : "" : <p className='input-error'>{error}</p>} */}
            {hintText && <p className='input-tip'>{hintText}</p>} 
          </div>
        </>
      }
      {
        type === "number" && <>
         <div className={`input-box ${error ? "error" : ""} number`}>
          <input type={type} required onChange={onChange} value={value} placeholder='+91'/>
           <span>{label}</span>
           {hintText && <p className={`input-tip  ${error ? "error" : ""}`}>{hintText}</p>} 
         </div></>
      }
    </>
  )
}

export default CustomInput