import React, { useCallback, useState } from "react";
import "./ProductDetail.css";
import CustomCard from "../../components/CustomCard";
import RadioBox from "../../components/RadioBox";
import Offers from "../../components/Offers";
import Redeemable from "../../components/Redeemable";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import NetEffecttive from "../../components/NetEffecttive";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../components/Button";
import TermsAndCondition from "../../components/TermsAndCondition";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCarouselRadioBtn from "../../components/ImageCarouselRadioBtn";
import RewardSummaryDesk from "../../components/RewardSummaryDesk";
import DownBar from "../../components/DownBar";
import PreviewGiftCardMob from "../../components/PreviewGiftCardMob";
import CustomMobNoInput from "../../components/CustomMobNoInput";
import CustomToggleBtn from "../../components/ToggleButtons/CustomToggleBtn";
const ProductDetail = () => {
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
    emailMessage: "",
  });
  const [formToggle, setFormToggle] = useState("buy-for-self");
  const [isRPSMobOpen, setIsRPSMobOpen] = useState(false);
  const [isPGOpen, setIsPGOpen] = useState(false);

  const formToggleArr = [
    { name: 'Buy for self', value: 'buy-for-self' },
    { name: 'Gift to someone', value: 'gift-to-someone' },
  ];
  let PriceRadioBtnArry = [
    {
      name: "₹250",
      value: "250",
    },
    {
      name: "₹500",
      value: "500",
    },
    {
      name: "₹1000",
      value: "1000",
    },
    {
      name: "₹5000",
      value: "5000",
    },
  ];
  let sendNowOrLaterBtnArr = [
    {
      name: "Send Now",
      value: "sendnow",
    },
    {
      name: "Send Later",
      value: "sendlater",
    },
  ];
  let giftCategoryArr = [
    {
      value: "best_wishes",
      label: "Best Wishes",
    },
    {
      value: "cccasions",
      label: "Occasions",
    },
    {
      value: "festival",
      label: "Festival",
    },
    {
      value: "anniversary",
      label: "Anniversary",
    },
  ];

  const handleFormToggleChange = useCallback((event) => {
    setFormToggle(event.target.value)
  }, [formToggle]);

  const handlePrceChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        giftPrice: event.target.value,
      })),
    [formFields.giftPrice]
  );
  const handleQuantityChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        giftQuantity: event.target.value,
      })),
    [formFields.giftQuantity]
  );
  const handleEmailCheckboxChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        onEmail: event.target.value,
      })),
    [formFields.onEmail]
  );
  const handleSMSCheckboxChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        onSms: event.target.value,
      })),
    [formFields.onSms]
  );
  const handleSendORNowChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        sendLatterOrNow: event.target.value,
      })),
    [formFields.sendLatterOrNow]
  );
  const handleFirstNameChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        firstNmae: event.target.value,
      })),
    [formFields.firstNmae]
  );
  const handleLastNameChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        lastNmae: event.target.value,
      })),
    [formFields.lastNmae]
  );
  const handleEmialIDChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        emailId: event.target.value,
      })),
    [formFields.emailId]
  );
  const handleMobileNoChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        mobileNo: event.target.value,
      })),
    [formFields.mobileNo]
  );
  const handleGiftCategoryRadioBox = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        giftCardCategory: event.target.value,
      })),
    [formFields.giftCardCategory]
  );
  const hanldeGiftThemeRadioChange = useCallback(
    (index) =>
      setFormFields((prevField) => ({ ...prevField, giftCardTheme: index })),
    [formFields.giftCardTheme]
  );
  const handleEmailSubChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        emailSubject: event.target.value,
      })),
    [formFields.emailSubject]
  );
  const handleEmaiTextChange = useCallback(
    (event) =>
      setFormFields((prevField) => ({
        ...prevField,
        emailMessage: event.target.value,
      })),
    [formFields.emailMessage]
  );

  const PriceRadioBtns = () =>
    PriceRadioBtnArry.map((obj) => (
      <RadioBox
        key={obj.value}
        onOptionChange={handlePrceChange}
        selectedOption={formFields.giftPrice}
        options={[{ value: obj.value, label: obj.label }]}
        className={"byforself-pric"}
      />
    ));
  const SendNowOrLaterRadioBtns = () =>
    sendNowOrLaterBtnArr.map((obj) => (
      <RadioBox
        key={obj.value}
        onOptionChange={handleSendORNowChange}
        selectedOption={formFields.sendLatterOrNow}
        options={[{ value: obj.value, label: obj.label }]}
        className={"byforself-pric"}
      />
    ));

  const toggleSRPMob = () => {
    setIsRPSMobOpen((prevState) => !prevState);
  };
  const togglePGMob = () => {
    setIsPGOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="mainConatiner">
        <Form>
          <Row className="pt-3">
            <Col md={6} lg={4}>
              <CustomCard label={true} tag={true} />
              <Redeemable />
              <Offers />
            </Col>
            <Col md={6} lg={8} className="product-form">
              <Row className={`product-form-grid`}>
                <Col xs={12} className="form-toggle ">
                  <div className="text-center line-height-0">
                    <CustomToggleBtn
                      selected={formToggle}
                      setSelected={handleFormToggleChange}
                      radios={formToggleArr}
                      name={"form-toggle"}
                      customeClass={"toggle-btn-3"}
                    />
                  </div>
                </Col>
                <Col xs={12} className="form-price-section">
                  <label className="form-label p-b-8">
                    Select Gift Value
                  </label>
                  <div className="radiobtn-group">
                    <CustomToggleBtn
                      selected={formFields.giftPrice}
                      setSelected={handlePrceChange}
                      radios={PriceRadioBtnArry}
                      name={"gift-price"}
                      customeClass={"toggle-btn-3"}
                    />
                  </div>
                  <label className="form-label">Or</label>
                  <CustomInput
                    label={"Enter Amount"}
                    hintText={"Min: ₹100, Max: ₹1,00,000"}
                    hintShow={true}
                    onChange={handlePrceChange}
                    value={formFields.giftPrice}
                    type="number"
                  />
                  <CustomInput
                    label={"Quantity"}
                    hintText={"Min: 1, Max: 10"}
                    hintShow={true}
                    onChange={handleQuantityChange}
                    value={formFields.giftQuantity}
                    type="number"
                  />
                </Col>
                <Col xs={12} className="form-ne-section">
                  <div className="ne-mobile">
                    <NetEffecttive onClick={() => toggleSRPMob()} />
                  </div>
                  <div className="ne-desk">{/* <RewardSummaryDesk /> */}</div>
                </Col>
              </Row>
              {formToggle === "gift-to-someone" ? (
                <Row className="form-delivery-details-section">
                  <Row className="form-divider">
                    <h3>
                      <span>Delivery Details</span>
                    </h3>
                  </Row>
                  <Row>
                    <Col lg={6} className="form-sms-or-mail-section">
                      <label className="form-label">
                        How would you like to send it?
                      </label>
                      <div className="checkbox-group">
                        <Form.Check
                          type={"checkbox"}
                          id={`default-checkbox`}
                          name="onEmail"
                          label={`Email`}
                          onChange={handleEmailCheckboxChange}
                        />
                        <Form.Check
                          type={"checkbox"}
                          id={`default-checkbox`}
                          name="emialOrSms"
                          label={`onSms`}
                          onChange={handleSMSCheckboxChange}
                        />
                      </div>
                      <p className="form-light-text">
                        Gift card will be delivered to this Mobile number
                        and Email ID{" "}
                        <span>
                          <img src="/Images/whatsapp-icon.svg" alt="" />
                        </span>
                      </p>
                      <label className="form-label">
                        How would you like to send it?
                      </label>
                      <CustomToggleBtn
                      selected={formFields.sendLatterOrNow}
                      setSelected={handleSendORNowChange}
                      radios={sendNowOrLaterBtnArr}
                      name={"send-now-or-latter"}
                      customeClass={"toggle-btn-3"}
                    />
                    </Col>
                    <Col lg={6} className="form-user-details">
                      <label className="form-label">
                        Who is this gift for?
                      </label>
                      <p className="form-light-text">
                        Gift card will be delivered to this Mobile number
                        and Email ID
                      </p>
                      <CustomInput
                        label={"First Name"}
                        onChange={handleFirstNameChange}
                        value={formFields.firstNmae}
                      />
                      <CustomInput
                        label={"last Name"}
                        onChange={handleLastNameChange}
                        value={formFields.lastNmae}
                      />
                      <CustomInput
                        label={"Email ID"}
                        onChange={handleEmialIDChange}
                        value={formFields.emailId}
                      />
                      <CustomMobNoInput
                        label={"Mobile Number"}
                        onChange={handleMobileNoChange}
                        value={formFields.mobileNo}
                        type="number"
                        countryCode={"+91"}
                      />
                    </Col>
                  </Row>

                </Row>
              ) : null}
            </Col>
          </Row>
          <Row>
            {formToggle === "gift-to-someone" ? (
              <Row className="form-divider">
                <h3>
                  <span>Personalise your Gift Card</span>
                </h3>
              </Row>
            ) : null}
            <Row>
              <Col className="form-personalise-section col-md-6">
                {formToggle === "gift-to-someone" ? (
                  <>
                    <label className="form-label">Choose Category</label>
                    <div className="radiobtn-group category">
                      <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={5}
                      >
                        {giftCategoryArr.map((ele) => (
                          <SwiperSlide key={ele.value}>
                            <RadioBox
                              onOptionChange={handleGiftCategoryRadioBox}
                              selectedOption={formFields.giftCardCategory}
                              options={[{ value: ele.value, label: ele.label }]}
                              className={"byforself-pric"}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                    </div>
                    <label className="form-label">Select a Theme</label>
                    <div className="radiobtn-group ">
                      <ImageCarouselRadioBtn
                        onChange={hanldeGiftThemeRadioChange}
                        selectedImage={formFields.giftCardTheme}
                      />
                    </div>
                    <CustomInput
                      label={"Email Subject"}
                      hintText={"Max 24 characters"}
                      hintShow={true}
                      onChange={handleEmailSubChange}
                      value={formFields.emailSubject}
                    />

                    <CustomInput
                      type="textarea"
                      label={"Personal Message"}
                      hintText={"Min: ₹100, Max: ₹1,00,000"}
                      hintShow={true}
                      onChange={handleEmaiTextChange}
                      value={formFields.emailMessage}
                    />

                    <div className="form-btn">
                      <Button handleClick={() => togglePGMob()}>
                        Preview eGift Card
                      </Button>
                    </div>
                  </>
                ) : null}
                <TermsAndCondition />
              </Col>
            </Row>
          </Row>
          <div className="addToCartOrBuyNow">
            <Col><Button className="addToCart">Add To Cart</Button></Col>
            <Col><Button className="buyNow text-white">Buy Now</Button></Col>
          </div>
        </Form>
      </div>

      {/* All pop comes from downside */}

      <DownBar
        toggleDownbar={toggleSRPMob}
        state={isRPSMobOpen}
        customClass={"rps-mob-view"}
      >
        <RewardSummaryDesk />
        <Button handleClick={() => toggleSRPMob()} className={"okay-btn"}>
          Okay
        </Button>
      </DownBar>

      <DownBar
        toggleDownbar={togglePGMob}
        state={isPGOpen}
        customClass={"pg-mob-view"}
      >
        <h3>Preview eGift Card</h3>
        <PreviewGiftCardMob />
        <Button handleClick={() => togglePGMob()} className={"okay-btn"}>
          Okay
        </Button>
      </DownBar>
    </>
  );
};

export default ProductDetail;
