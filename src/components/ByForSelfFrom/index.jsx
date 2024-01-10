import React, { useState } from 'react'
import RadioBox from '../RadioBox'
import "./ByForSelfFrom.css"
import CustomInput from '../CustomInput';

const ByForSelfFrom = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    let PriceRadioBtnArry = [
        {
            value: "250",
            label: "₹250"
        },
        {
            value: "500",
            label: "₹250"
        },
        {
            value: "1000",
            label: "₹250"
        },
        {
            value: "5000",
            label: "₹250"
        }
    ]

    const PriceRadioBtns = () => PriceRadioBtnArry.map((obj, index) => <RadioBox key={index} onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: obj.value, label: obj.label }]} className={"byforself-pric"} />)

    return (
        <div className='product-form-commn-fields'>
                <label className='bold-label'>Select Gift Value</label>
                <div className='input-box'>
                    <div className='radio-group'>
                        <PriceRadioBtns />
                    </div>
                </div>
                <label className='bold-label'>Or</label>
                <div className='input-box'>
                    <CustomInput label={"Enter Amount"} hint={"Min: ₹100, Max: ₹1,00,000"} />
                </div>
                <div className='input-box'>
                    <CustomInput label={"Quantity"} hint={"Min: 1, Max: 10"} />
                </div>
        </div>
    )
}

export default ByForSelfFrom