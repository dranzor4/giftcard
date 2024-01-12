import React, { useState } from 'react'
import RadioBox from '../RadioBox'
import "./ByForSelfFrom.css"
import CustomInput from '../CustomInput';
import NetEffecttive from '../NetEffecttive';
import TermsAndCondition from '../TermsAndCondition';

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
        <div className='buy-for-sefl-form'>
            <form>
                <label className='form-label p-b-8'>
                    Select Gift Value</label>
                <div className='radio-group-box'>
                    <PriceRadioBtns />
                </div>
                <label className='form-label'>Or</label>

                <CustomInput label={"Enter Amount"} hint={"Min: ₹100, Max: ₹1,00,000"} />

                <CustomInput label={"Quantity"} hint={"Min: 1, Max: 10"} />

                <NetEffecttive />
                <TermsAndCondition />
            </form>
        </div>
    )
}

export default ByForSelfFrom