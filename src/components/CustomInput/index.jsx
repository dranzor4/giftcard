import React from 'react'
import "./CustomInput.css"

const CustomInput = ({onChange, label, error, value, hint}) => {
  return (
    <div className='input-box'>
        <input type="text" onChange={(e) => onChange(e.target.value)} required />
        <span>{label}</span>
        <p>{hint}</p>
        {/* <p className='input-error'>
          error message
        </p> */}
    </div>
  )
}

export default CustomInput