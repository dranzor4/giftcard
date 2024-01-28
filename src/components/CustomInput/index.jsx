import React, { memo } from 'react'
import "../../global_css/global_input.css"

const CustomInput = ({ type = "text", onChange, label, error, value, hintText, }) => {

  console.log("render input");
  return (
    <>
      {
        type === "text" && <>
          <div className={`input-box ${error && "error"}`}>

            <input type={type} required onChange={onChange} value={value} />
            <span className='input-box-label'>{label}</span>
            {error ? <p className={`input-tip  ${error && "error"}`}>{error}</p> : hintText ? <p className='input-tip'>{hintText}</p> : null}
          </div></>
      }
      {
        type === "textarea" && <>
          <div className={`input-box ${error && "error"}`}>
            <textarea required cols="30" rows="3"></textarea>
            <span className='input-box-label'>{label}</span>
            {error ? <p className={`input-tip  ${error && "error"}`}>{error}</p> : hintText ? <p className='input-tip'>{hintText}</p> : null}
          </div>
        </>
      }
      {
        type === "number" && <>
          <div className={`input-box ${error && "error"}`}>
            <input type={type} required onChange={onChange} value={value}  />
            <span className='input-box-label'>{label}</span>
            {error ? <p className={`input-tip  ${error && "error"}`}>{error}</p> : hintText ? <p className='input-tip'>{hintText}</p> : null}
          </div></>
      }
    </>
  )
}

export default memo(CustomInput) 