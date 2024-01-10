import React, { useState } from 'react'
import RadioBox from '../RadioBox'
import "./ByForSelfFrom.css"

const ByForSelfFrom = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className='byforself-form'>
            <div className='byforself-form-container'>
                <label className='bold-label'>Select Gift Value</label>
                <div className='input-box'>
                    <div className='radio-group'>
                        <RadioBox onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: '250', label: '₹250' }]} className={"byforself-pric"} />
                        <RadioBox onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: '500', label: '₹500' }]} className={"byforself-pric"} />
                        <RadioBox onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: '1000', label: '₹1000' }]} className={"byforself-pric"} />
                        <RadioBox onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: '5000', label: '₹5000' }]} className={"byforself-pric"} />
                    </div>
                </div>
                <label className='bold-label'>Or</label>
                <div className='input-box'>
                   
                </div>
            </div>
        </div>
    )
}

export default ByForSelfFrom