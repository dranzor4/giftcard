// ModalComponent.js
import React, { useState } from "react";
import {
  Modal,
  Button,
  Modal as BootstrapModal,
  Form,
  InputGroup,
  ModalBody,
} from "react-bootstrap";
import "./newlogin.css";

const SignModalComp = ({ show, handleClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [otp, setOtp] = useState("");
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [welcomeform, setWelcomeform] = useState(false);
  const [mobileNumberVerified, setMobileNumberVerified] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const generateOtp = () => {
    // You can implement logic to generate OTP here, for simplicity, using a random 4-digit number
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOtp.toString());
    setOtpGenerated(true);
    setMobileError("");
  };

  const verifyOTP = () => {
    setOtpGenerated(false);
    setMobileNumberVerified(true);
  };

  // Validate mobile number
  const SignUpFormSubmit = (e) => {
    setWelcomeform(true);
    e.preventDefault();

    // Reset error messages
    setMobileError("");
    setEmailError("");

    if (mobileNumber.length !== 10) {
      setMobileNumber("");
      setMobileNumberVerified(false);
      setMobileError("Please enter a valid 10-digit mobile number.");
      setWelcomeform(false);
      return;
    } else {
      setMobileError("");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmail("");
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!otpGenerated) {
      generateOtp();
      setMobileError("");
      // You can send the OTP to the user's mobile number using an API or display it in some way
    } else {
      // If OTP is already generated, you can proceed with further logic
      console.log("Right Phone number and Email...");
      console.log("Entered OTP:", otp);
      console.log("Mobile Number Verified:", mobileNumberVerified);
    }
    setWelcomeform(true);
  };

  return (
    <BootstrapModal show={show} onHide={handleClose} centered>
      {welcomeform ? (
        <div className="welcome-header">
        <div className="welcome-header-one">
        <div></div>
          <div>Account Created Successfully</div>
        </div>
      </div>
      ) : (
        <div className="modall-header">
          <div className="modal-header-first">
            <div className="modal-header-first-one">
              <div className="login-header-one">
                <Modal.Header
                  closeButton={true}
                  style={{ borderBottom: "none" }}
                >
                  <div className="login-header-first">
                    <div>Welcome to Woohoo</div>
                    <div>Create a new account</div>
                  </div>
                </Modal.Header>
              </div>
              <div className="login-header-two">
                <Modal.Body style={{ width: "-webkit-fill-available" }}>
                  <Form
                    style={{ width: "-webkit-fill-available" }}
                    onSubmit={SignUpFormSubmit}
                  >
                    <div>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          required
                          placeholder="First Name"
                          value={firstname}
                          style={{ fontSize: "small" }}
                          onChange={(e) => setFirstName(e.target.value)}
                          autoFocus
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          required
                          placeholder="Last Name"
                          style={{ fontSize: "small" }}
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="mobile-prefix"
                          style={{
                            backgroundColor: "white",
                            fontSize: "small",
                          }}
                        >
                          +91
                        </InputGroup.Text>
                        <Form.Control
                          type="tel"
                          placeholder="Mobile number"
                          aria-label="Mobile Number"
                          aria-describedby="mobile-prefix"
                          style={{
                            fontSize: "small",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                          value={mobileNumber}
                          required
                          onChange={(e) => {const onlyDigits = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                          setMobileNumber(onlyDigits);}}
                        />{" "}
                        {mobileNumberVerified && (
                          <InputGroup.Text
                            id="verify-number"
                            style={{ background: "transparent" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM10.5265 4.34846C10.2703 4.09218 9.85474 4.09218 9.59845 4.34846C9.59227 4.35465 9.58645 4.36121 9.58105 4.36809L6.54272 8.23965L4.71089 6.40782C4.45461 6.15154 4.0391 6.15154 3.78281 6.40782C3.52653 6.6641 3.52653 7.07962 3.78281 7.3359L6.09846 9.65154C6.35474 9.90782 6.77025 9.90782 7.02653 9.65154C7.03224 9.64583 7.03763 9.63981 7.04267 9.63351L10.5358 5.26704C10.7828 5.01009 10.7797 4.6016 10.5265 4.34846Z"
                                fill="#25A42F"
                              />
                            </svg>
                          </InputGroup.Text>
                        )}
                        {!otpGenerated &&
                          mobileNumber.length === 10 &&
                          !mobileNumberVerified && (
                            <InputGroup.Text
                              id="verify-number"
                              className="otp-generation-style"
                              onClick={generateOtp}
                            >
                              Verify
                            </InputGroup.Text>
                          )}
                        {otpGenerated && (
                          <InputGroup.Text
                            id="verify-number"
                            onClick={generateOtp}
                            className="otp-generation-style"
                      
                          >
                            Resend OTP
                          </InputGroup.Text>
                        )}
                      </InputGroup>

                      {mobileError && (
                        <div style={{ color: "red", fontSize: "14px" }}>
                          {mobileError}
                        </div>
                      )}

                      {otpGenerated && (
                        <InputGroup className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            style={{ borderLeft: "none", borderRight: "none", fontSize: "small" }}
                            onChange={(e) => setOtp(e.target.value)}
                          />

                          <InputGroup.Text
                            className="otp-generation-style"
                            id="verify-otp"
                            onClick={verifyOTP}
                          >
                            Verify
                          </InputGroup.Text>
                        </InputGroup>
                      )}

                      <InputGroup className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email ID"
                          value={email}
                          style={{
                            fontSize: "small",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                      {emailError && (
                        <div style={{ color: "red", fontSize: "14px" }}>
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div className="login-otp-button">
                      <Button
                      style={{fontSize:"small"}}
                        variant="primary"
                        className="custom-width-btn"
                        // onClick={handleSendOTP}
                        type="submit"
                      >
                        Create Account
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </div>
            </div>
            <div className="modal-header-first-two">
              <div className="create-new-account">
                <div>Already a Customer </div>
                <div>
                  <a
                    style={{ fontWeight: 500, cursor: "pointer" }}
                    href="#"
                    // onClick={handleCreateAccountClick}
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-header-second">
            This site is protected by reCAPTCHA and the{" "}
            <a href="#">
              Google Privacy <br /> Policy
            </a>{" "}
            and <a href="#">Terms of Service</a> apply.
          </div>
        </div>
      )}
    </BootstrapModal>
  );
};

export default SignModalComp;
