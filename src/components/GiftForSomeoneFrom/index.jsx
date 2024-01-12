import React, { useState } from 'react'
import "./GiftForSomeoneFrom.css"
import CustomInput from '../CustomInput'
import NetEffecttive from '../NetEffecttive'
import RadioBox from '../RadioBox'
import { Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomCard from '../CustomCard'
import Button from '../Button/Button'
const GiftForSomeoneFrom = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [sendNowOrLater, setSendNowOrLater] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handlesetSendNowOrLaterChange = (event) => {
        setSendNowOrLater(event.target.value);
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

    let sendNowOrLaterBtnArr = [
        {
            value: "sendnow",
            label: "Send Now"
        },
        {
            value: "sendlater",
            label: "Send Later"
        }
    ]

    let giftCategoryArr = [
        {
            value: "best_wishes",
            label: "Best Wishes"
        },
        {
            value: "cccasions",
            label: "Occasions"
        },
        {
            value: "festival",
            label: "Festival"
        },
        {
            value: "anniversary",
            label: "Anniversary"
        }
    ]

    const PriceRadioBtns = () => PriceRadioBtnArry.map((obj, index) => <RadioBox key={index} onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: obj.value, label: obj.label }]} className={"byforself-pric"} />)
    const SendNowOrLaterRadioBtns = () => sendNowOrLaterBtnArr.map((obj, index) => <RadioBox key={index} onOptionChange={handlesetSendNowOrLaterChange} selectedOption={sendNowOrLater} options={[{ value: obj.value, label: obj.label }]} className={"byforself-pric"} />)

    return (
        <div className='gift-for-someone-form'>
            <Form>

                <div className='form-price-section'>
                    <label className='form-label'>
                        Select Gift Value
                    </label>
                    <div className='radiobtn-group'>
                        <PriceRadioBtns />
                    </div>
                    <label className='form-label'>Or</label>

                    <CustomInput label={"Enter Amount"} hintText={"Min: ₹100, Max: ₹1,00,000"} hintShow={true} />

                    <CustomInput label={"Quantity"} hintText={"Min: 1, Max: 10"} hintShow={true} />
                    <div className='form-net-effetive-setion'>
                        <NetEffecttive />
                    </div>
                </div>



                {/* Delivery Details section */}

                <div className='form-delivery-details-section '>
                    <div className='form-divider'>
                        <h3><span>Delivery Details</span></h3>
                    </div>

                    <div className='form-sms-or-mail-section'>
                        <label className='form-label'>How would you like to send it?</label>
                        <div className='checkbox-group'>
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={`Email`}
                            />
                            <Form.Check
                                type={"checkbox"}
                                id={`default-checkbox`}
                                label={`SMS`}
                            />
                        </div>
                        <p className='form-light-text'>Gift card will be delivered to this Mobile number and Email ID <span><img src="/Images/whatsapp-icon.svg" alt="" /></span></p>
                        <label className='form-label'>How would you like to send it?</label>
                        <SendNowOrLaterRadioBtns />
                    </div>
                    <div className='form-user-details'>
                        <label className='form-label'>Who is this gift for?</label>
                        <p className='form-light-text'>Gift card will be delivered to this Mobile number and Email ID</p>
                        <CustomInput label={"First Name"} />
                        <CustomInput label={"last Name"} />
                        <CustomInput label={"Email ID"} />
                        <CustomInput label={"Mobile Number"} />
                    </div>
                </div>

                {/* Personalise your Gift Card section */}

                <div className='form-personalise-section'>
                    <div className='form-divider'>
                        <h3><span>Personalise your Gift Card</span></h3>
                    </div>
                    <label className='form-label'>
                        Choose Category
                    </label>

                    <div className='radiobtn-group'>
                        <Swiper
                            slidesPerView={3.2}
                            spaceBetween={16}
                        >
                            {
                                giftCategoryArr.map((ele) => <SwiperSlide><RadioBox onOptionChange={handleOptionChange} selectedOption={selectedOption} options={[{ value: ele.value, label: ele.label }]} className={"byforself-pric"} /></SwiperSlide>)
                            }

                        </Swiper>
                    </div>


                    <label className='form-label'>
                        Select a Theme
                    </label>
                    <div className='radiobtn-group gift'>
                        <Swiper
                            slidesPerView={3.1}
                            spaceBetween={10}
                            loop={true}
                        >
                            <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                            <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                            <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                            <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                        </Swiper>
                    </div>
                    <CustomInput label={"Email Subject"} hintText={"Max 24 characters"} hintShow={true} />
                    <CustomInput type='textarea' label={"Personal Message"} hintText={"Min: ₹100, Max: ₹1,00,000"} hintShow={true} />
                    <div className='form-btn'>
                        <Button>Preview eGift Card</Button>
                    </div>
                </div>



                {/* <label className='form-label'>
                    Who is this gift for?
                </label>
                <p className='form-light-text'>Gift card will be delivered to this Mobile number and Email ID</p> */}
            </Form>
        </div>
    )
}

export default GiftForSomeoneFrom