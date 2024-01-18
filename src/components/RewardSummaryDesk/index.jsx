import React from 'react'
import "./RewardSummaryDesk.css"
import CustomSelect from '../CustomSelect'
import NetEffecttive from '../NetEffecttive'

const RewardSummaryDesk = () => {
    const netEffectiveoptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Add more options as needed
      ];
    return (
        <div className="reward-point-summery">
            <div className="rps-header">
                <h2>
                    Reward Points Summary
                </h2>
                <CustomSelect options={netEffectiveoptions} />
            </div>
            <div className="rps-body">
                <ul className="rps-ul">
                    <li className="rps-li">
                        <div>Total Cart Value</div>
                        <div>₹1000</div>
                    </li>
                    <li className="rps-li">
                        <div>Regular Reward Points</div>
                        <div>30</div>
                    </li>
                    <li className="rps-li">
                        <div>Bonus Reward Points</div>
                        <div>120</div>
                    </li>
                    <li className="rps-li">
                        <div>Bonus Reward Points</div>
                        <div>₹120</div>
                    </li>
                </ul>
            </div>
            <div className="rps-footer">
                <NetEffecttive price={"800"}/>
            </div>
        </div>
    )
}

export default RewardSummaryDesk