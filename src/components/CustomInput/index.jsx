import React, { memo } from 'react'
import "../../global_css/global_input.css"

const CustomInput = ({ type = "text", onChange, label, error = false, value, hintText, }) => {
  console.log("render input");
  return (
    <>
      {
        type === "text" && <>
          <div className={`input-box ${error}`}>

            <input type={type} required onChange={onChange} value={value} />
            <span className='input-box-label'>{label}</span>
            {hintText && <p className={`input-tip  ${error}`}>{hintText}</p>}
          </div></>
      }
      {
        type === "textarea" && <>
          <div className='input-box'>
            <textarea required cols="30" rows="3"></textarea>
            <span className='input-box-label'>{label}</span>
            {/* {error === "" ? hintShow ? <p className='input-tip'>{hintText}</p> : "" : <p className='input-error'>{error}</p>} */}
            {hintText && <p className='input-tip'>{hintText}</p>}
          </div>
        </>
      }
      {
        type === "number" && <>
          <div className={`input-box ${error}`}>
            <input type={type} required onChange={onChange} value={value}  />
            <span className='input-box-label'>{label}</span>
            {hintText && <p className={`input-tip  ${error}`}>{hintText}</p>}
          </div></>
      }
    </>
  )
}

export default memo(CustomInput) 