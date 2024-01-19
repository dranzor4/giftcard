import React from 'react'
import "./CustomInput.css"

const CustomInput = ({ type = "text", onChange, label, error = false, value, hintText, }) => {
  return (
    <>
      {
        type === "text" && <>
          <div className={`input-box ${error}`}>

            <input type={type} required onChange={onChange} value={value} />
            <span>{label}</span>
            {hintText && <p className={`input-tip  ${error}`}>{hintText}</p>}
          </div></>
      }
      {
        type === "textarea" && <>
          <div className='input-box'>
            <textarea required cols="30" rows="3"></textarea>
            <span>{label}</span>
            {/* {error === "" ? hintShow ? <p className='input-tip'>{hintText}</p> : "" : <p className='input-error'>{error}</p>} */}
            {hintText && <p className='input-tip'>{hintText}</p>}
          </div>
        </>
      }
      {
        type === "number" && <>
          <div className={`input-box ${error} number`}>
            <input type={type} required onChange={onChange} value={value} placeholder='+91' />
            <span>{label}</span>
            {hintText && <p className={`input-tip  ${error}`}>{hintText}</p>}
          </div></>
      }
    </>
  )
}

export default CustomInput