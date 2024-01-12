import React from 'react'
import "./CustomInput.css"

const CustomInput = ({ type = "text", onChange, label, error, value, hintShow, hintText, }) => {
  return (
    <>
      {
        type === "text" ?
          <div className='input-box'>
            {/* <input type={type} onChange={(e) => onChange(e.target.value)} required /> */}
            <input type={type} required />
            <span>{label}</span>
            {/* {error === "" ? hintShow ? <p className='input-tip'>{hintText}</p> : "" : <p className='input-error'>{error}</p>} */}
            {hintText && <p className='input-tip'>{hintText}</p>} 
          </div> : <div className='input-box'>
            <textarea name="" id="" required cols="30" rows="3"></textarea>
            <span>{label}</span>
            {/* {error === "" ? hintShow ? <p className='input-tip'>{hintText}</p> : "" : <p className='input-error'>{error}</p>} */}
            {hintText && <p className='input-tip'>{hintText}</p>} 
          </div>

      }
    </>
  )
}

export default CustomInput