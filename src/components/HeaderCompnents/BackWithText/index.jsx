import React from 'react'
import "./BackWithText.css"
import { useNavigate } from 'react-router-dom';
const BackWithText = () => {
    const navigate = useNavigate();
  return (
    <div className='header-back-btn' onClick={() => navigate(-1)}>
        <div  className='back-btn'><img src="/Images/left-arrow.svg" alt="page back btn" /></div>
        <h6>Back button</h6>
    </div>
  )
}

export default BackWithText