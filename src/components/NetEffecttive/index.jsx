import React from 'react'
import "./NetEffecttive.css"
const NetEffecttive = ({onClick}) => {
  return (
    <div className='net-effective'>
        <p className='text'>Net Effective Price <img src='/Images/tooltips.svg' /> </p>
        <button className='button' onClick={onClick}>Know How</button>
    </div>
  )
}

export default NetEffecttive