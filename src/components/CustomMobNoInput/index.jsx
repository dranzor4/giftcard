import React from 'react'
import "../../global_css/global_input.css"
import "./CustomMobNoInput.css"

const CustomMobNoInput = ({error, onChange, value,label, hintText,countryCode}) => {
    return (
        <div className={`input-box mobile-number ${error}`}>
            <input type='number' required onChange={onChange} value={value} />
            <span className='input-box-label'>{label}</span>
            <span className='county-code'>{countryCode}</span>
            {hintText && <p className={`input-tip  ${error}`}>{hintText}</p>}
        </div>
    )
}

export default CustomMobNoInput