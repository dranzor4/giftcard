import React from 'react'
import "./NetEffecttive.css"
const NetEffecttive = ({onClick, price}) => {
  return (
    <div className='net-effective'>
        <p className='text'>Net Effective Price <img src='/Images/tooltips.svg' /> </p>
        {price ? <p className='text'>{price}</p> : <span className='span' onClick={onClick}>Know How</span>}
        
    </div>
  )
}

export default NetEffecttive