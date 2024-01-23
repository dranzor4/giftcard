import React, { useState } from "react";
import "./ProductDetail.css";
import CustomCard from "../../components/CustomCard/index";
import RadioBox from "../../components/RadioBox";
import GiftForSomeoneFrom from "../../components/GiftForSomeoneFrom";
import Offers from "../../components/Offers";
import Redeemable from "../../components/Redeemable"
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

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
  console.log(formFields);
  const [formToggle, setFormToggle] = useState("buy-for-self");
  const [isRPSMobOpen, setIsRPSMobOpen] = useState(false);
  const [isPGOpen, setIsPGOpen] = useState(false);

  const options = [
    { value: "buy-for-self", label: "Buy for Self" },
    { value: "gift-to-someone", label: "Gift to Someone" },
  ];
  let PriceRadioBtnArry = [
    {
      value: "250",
      label: "₹250",
    },
    {
      value: "500",
      label: "₹250",
    },
    {
      value: "1000",
      label: "₹250",
    },
    {
      value: "5000",
      label: "₹250",
    },
  ];
  let sendNowOrLaterBtnArr = [
    {
      value: "sendnow",
      label: "Send Now",
    },
    {
      value: "sendlater",
      label: "Send Later",
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
        <div className={"backBtn"}>
          <img
            src="/Images/left-arrow.svg"
            onClick={() => navigate(-1)}
            alt=""
          />
          <img src="/Images/search-icon.svg" alt="" />
        </div>
        <div className={""}>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <CustomCard label={true} tag={true} />
              <Redeemable />
              <Offers />
            </div>
            <div className={`${"product-form"} | col-md-6 col-lg-8`}>
              <div className={`row`}>
                <div className={`product-form-grid row`}>
                  <div className="form-toggle ">
                    <div className="text-center line-height-0">
                      <RadioBox
                        options={options}
                        selectedOption={formToggle}
                        onOptionChange={(event) =>
                          setFormToggle(event.target.value)
                        }
                        className="product-selforgift-btn"
                      />
                    </div>
                  </div>
                  <div className="form-price-section">
                    <label className="form-label p-b-8">
                      Select Gift Value
                    </label>
                    <div className="radiobtn-group">
                      <PriceRadioBtns />
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
                  </div>
                  <div className="form-ne-section">
                    <div className="ne-mobile">
                      <NetEffecttive onClick={() => toggleSRPMob()} />
                    </div>
                    <div className="ne-desk">{/* <RewardSummaryDesk /> */}</div>
                  </div>
                </div>
                {formToggle === "gift-to-someone" ? (
                  <div className="row">
                    <div className="form-delivery-details-section ">
                      <div className="form-divider">
                        <h3>
                          <span>Delivery Details</span>
                        </h3>
                      </div>
                      <div className="row">
                        <div className="form-sms-or-mail-section col-lg-6">
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
                          <SendNowOrLaterRadioBtns />
                        </div>
                        <div className="form-user-details col-lg-6">
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
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row col-md-9">
            {formToggle === "gift-to-someone" ? (
              <>
                <div className="form-divider">
                  <h3>
                    <span>Personalise your Gift Card</span>
                  </h3>
                </div>
              </>
            ) : null}
            <div className="col-md-6"></div>
            <div className="form-personalise-section col-md-6">
              {formToggle === "gift-to-someone" ? (
                <>
                  <label className="form-label">Choose Category</label>
                  <div className="radiobtn-group">
                    <Swiper slidesPerView={3.2} loop={true}>
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
            </div>
          </div>
        </div>
      </div>

      {/* All pop comes from downs */}

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
=======
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

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    { value: 'Buy for Self', label: 'Buy for Self'  },
    { value: 'Gift to Someone', label: 'Gift to Someone' },
  ];

  return (
    <>
      <div className="mainConatiner">
        <div className="backBtn">
          <img src="/Images/left-arrow.svg" onClick={() => navigate(-1)} alt="" />
          <img  src="/Images/search-icon.svg" alt="" />
        </div>
        <div className="prductDetailPage">
          <div className="cardDetails">
            <CustomCard label={true} tag={true}/>
            <Redeemable />
            <Offers />
          </div>
          <div className="cardForm">
            <div className="text-center line-height-0">
              <RadioBox options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} className="product-selforgift-btn" />
            </div>
            {/* <ByForSelfFrom /> */}
            <GiftForSomeoneFrom />
          </div>
        </div>
      </div>
>>>>>>> parent of 9edd226 (Merge branch 'main' into Uzair-Gift-Card)
    </>
  );
};

export default ProductDetail;
