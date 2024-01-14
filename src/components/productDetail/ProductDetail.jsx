import React, { useState } from "react";
import "./ProductDetail.css";
import CustomCard from "../CustomCard/index";
import RadioBox from "../RadioBox";
import GiftForSomeoneFrom from "../GiftForSomeoneFrom";
import Offers from "../Offers";
import Redeemable from "../Redeemable";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import NetEffecttive from "../NetEffecttive";
import { Form } from "react-bootstrap";
import Button from "../Button";
import TermsAndCondition from "../TermsAndCondition";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCarouselRadioBtn from "../ImageCarouselRadioBtn";
const ProductDetail = () => {
  // const { productIndex } = useParams();
  // const navigate=useNavigate();
  // const data = cardData[productIndex];
  // let customClass = {
  //   product: styles.product,
  //   card: styles.card,
  //   cardHeader: styles.cardHeader,
  //   cardContent: styles.cardContent,
  //   cardImage: styles.cardImage,
  //   cardBadge: styles.cardBadge,
  //   validityText: styles.validityText,
  // };

  const navigate = useNavigate()

  const [formFields, setFormFields] = useState({
    giftPrice: "",
    giftQuantity: 1,
    onEmail: "",
    onSms: "",
    sendLatterOrNow: "sendnow",
    firstNmae: "",
    lastNmae: "",
    emailId: "",
    mobileNo: "",
    giftCardCategory: "",
    giftCardTheme: 0,
    emailSubject: "",
    emailMessage: ""
  })
  console.log(formFields);
  const [formToggle, setFormToggle] = useState("")
  const [selectedOption, setSelectedOption] = useState('');
  const [sendNowOrLater, setSendNowOrLater] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
  const handleRadioChange = (index) => {
    setSelectedImage(index);
  };
  const options = [
    { value: 'Buy for Self', label: 'Buy for Self' },
    { value: 'Gift to Someone', label: 'Gift to Someone' },
  ];
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
  const handlesetSendNowOrLaterChange = (event) => {
    setSendNowOrLater(event.target.value);
  };

  const PriceRadioBtns = () => PriceRadioBtnArry.map((obj, index) => <RadioBox
    key={index}
    onOptionChange={(event) => setFormFields({ ...formFields, "giftPrice": event.target.value })}
    selectedOption={formFields.giftPrice}
    options={[{ value: obj.value, label: obj.label }]}
    className={"byforself-pric"}
  />)
  const SendNowOrLaterRadioBtns = () => sendNowOrLaterBtnArr.map((obj, index) => <RadioBox
    key={index}
    onOptionChange={(event) => setFormFields({ ...formFields, "sendLatterOrNow": event.target.value })}
    selectedOption={formFields.sendLatterOrNow}
    options={[{ value: obj.value, label: obj.label }]}
    className={"byforself-pric"} />)
  const GiftCategoryBtn = giftCategoryArr.map((ele) => <SwiperSlide>
    <RadioBox onOptionChange={handleOptionChange}
      selectedOption={selectedOption}
      options={[{ value: ele.value, label: ele.label }]}
      className={"byforself-pric"}
    />
  </SwiperSlide>)
  return (
    <>
      <div className="mainConatiner">
        <div className={"backBtn"}>
          <img src="/Images/left-arrow.svg" onClick={() => navigate(-1)} alt="" />
          <img src="/Images/search-icon.svg" alt="" />
        </div>
        <div className={""}>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <CustomCard label={true} tag={true} />
              <Redeemable />
              <Offers />
            </div>
            <div className={`${"productForm"} | col-md-6 col-lg-8`}>
              <div className={`row`}>
                <div className={`${"gridForm"} row`}>
                  <div className="form-toggle ">
                    <div className="text-center line-height-0">
                      <RadioBox options={options}
                        selectedOption={selectedOption}
                        onOptionChange={handleOptionChange}
                        className="product-selforgift-btn" />
                    </div>
                  </div>
                  <div className="fomr-1">
                    <div className='form-price-section'>
                      <label className='form-label p-b-8'>
                        Select Gift Value
                      </label>
                      <div className='radiobtn-group'>
                        <PriceRadioBtns />
                      </div>
                      <label className='form-label'>Or</label>
                      <CustomInput
                        label={"Enter Amount"}
                        hintText={"Min: ₹100, Max: ₹1,00,000"}
                        hintShow={true}
                        onChange={(event) => setFormFields({ ...formFields, "giftPrice": event.target.value })}
                        value={formFields.giftPrice}
                      />

                      <CustomInput
                        label={"Quantity"}
                        hintText={"Min: 1, Max: 10"}
                        hintShow={true}
                        onChange={(event) => setFormFields({ ...formFields, "giftQuantity": event.target.value })}
                        value={formFields.giftQuantity}
                      />

                    </div>
                  </div>
                  <div className={"form2"}>
                    <NetEffecttive />
                  </div>
                </div>
                <div className="row">
                  <div className='form-delivery-details-section '>
                    <div className='form-divider'>
                      <h3><span>Delivery Details</span></h3>
                    </div>

                    <div className="row">
                      <div className='form-sms-or-mail-section col-lg-6'>
                        <label className='form-label'>How would you like to send it?</label>
                        <div className='checkbox-group'>
                          <Form.Check
                            type={"checkbox"}
                            id={`default-checkbox`}
                            name="onEmail"
                            label={`Email`}
                            onChange={(event) => setFormFields({ ...formFields, "onEmail": event.target.value })}
                          />
                          <Form.Check
                            type={"checkbox"}
                            id={`default-checkbox`}
                            name="emialOrSms"
                            label={`onSms`}
                            onChange={(event) => setFormFields({ ...formFields, "onSms": event.target.value })}
                          />
                        </div>
                        <p className='form-light-text'>Gift card will be delivered to this Mobile number and Email ID <span><img src="/Images/whatsapp-icon.svg" alt="" /></span></p>
                        <label className='form-label'>How would you like to send it?</label>
                        <SendNowOrLaterRadioBtns />
                      </div>
                      <div className='form-user-details col-lg-6'>
                        <label className='form-label'>Who is this gift for?</label>
                        <p className='form-light-text'>Gift card will be delivered to this Mobile number and Email ID</p>
                        <CustomInput
                          label={"First Name"}
                          onChange={(event) => setFormFields({ ...formFields, "firstNmae": event.target.value })}
                          value={formFields.firstNmae}
                        />
                        <CustomInput
                          label={"last Name"}
                          onChange={(event) => setFormFields({ ...formFields, "lastNmae": event.target.value })}
                          value={formFields.lastNmae}
                        />
                        <CustomInput
                          label={"Email ID"}
                          onChange={(event) => setFormFields({ ...formFields, "emailId": event.target.value })}
                          value={formFields.emailId}
                        />
                        <CustomInput
                          label={"Mobile Number"}
                          onChange={(event) => setFormFields({ ...formFields, "mobileNo": event.target.value })}
                          value={formFields.mobileNo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-9">
            <div className='form-divider'>
              <h3><span>Personalise your Gift Card</span></h3>
            </div>
            <div className="col-md-6"></div>
            <div className='form-personalise-section col-md-6 '>
              <label className='form-label'>
                Choose Category
              </label>
              <div className='radiobtn-group'>
                <Swiper
                  slidesPerView={3.2}
                  loop={true}
                >
                  {
                    giftCategoryArr.map((ele) => <SwiperSlide><RadioBox onOptionChange={(event) => setFormFields({ ...formFields, "giftCardCategory": event.target.value })} selectedOption={formFields.giftCardCategory} options={[{ value: ele.value, label: ele.label }]} className={"byforself-pric"} /></SwiperSlide>)
                  }
                </Swiper>
              </div>
              <label className='form-label'>
                Select a Theme
              </label>
              <div className='radiobtn-group '>
                {/* <Swiper
                  slidesPerView={3.1}
                  spaceBetween={10}
                  loop={true}
                >
                  <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                  <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                  <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                  <SwiperSlide><div className='each-slide-container'><CustomCard /></div></SwiperSlide>
                </Swiper> */}
                <ImageCarouselRadioBtn onChange={(index) => setFormFields({ ...formFields, "giftCardTheme": index })} selectedImage={formFields.giftCardTheme} />
              </div>
              <CustomInput
                label={"Email Subject"}
                hintText={"Max 24 characters"}
                hintShow={true} 
                onChange={(event) => setFormFields({ ...formFields, "emailSubject": event.target.value })}
                value={formFields.emailSubject}
                />
                
              <CustomInput
                type='textarea'
                label={"Personal Message"}
                hintText={"Min: ₹100, Max: ₹1,00,000"}
                hintShow={true} 
                onChange={(event) => setFormFields({ ...formFields, "emailMessage": event.target.value })}
                value={formFields.emailMessage}
                />
                
              <div className='form-btn'>
                <Button>Preview eGift Card</Button>
              </div>
              <TermsAndCondition />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
