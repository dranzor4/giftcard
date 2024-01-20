import React, { useEffect, useState } from "react";
import {
  Modal as BootstrapModal,
  Button,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import "./newlogin.css";
import SignModalComp from "./SignModalComp";

const LoginModalComp = ({ show, handleClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [timer, setTimer] = useState(30);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [welcomeform, setWelcomeform] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [signModal, setSignModal] = useState(false);
  const hardcodedOtp = "123456";

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (welcomeform) {
      setTimeout(() => {
        handleClose();
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer, welcomeform, handleClose]);

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      setEnteredMobileNumber(mobileNumber);
      setTimer(30);
      setShowOTPForm(true);
      setOtpError("");
      console.log("Sending OTP...");
    } else {
      setMobileNumber("");
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (enteredOtp === hardcodedOtp) {
      setWelcomeform(true);
      console.log("OTP Verified!");
    } else {
      setEnteredOtp("");
      setOtpError("Incorrect OTP. Please try again.");
    }
  };

  const handleMobileNumberChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    setMobileNumber(inputValue);
  };

  const handleCreateAccountClick = () => {
    setIsLoginModalOpen(false); // Close LoginModalComp
    setSignModal(true);
  };

  const handleSignModalClose = () => {
    setIsLoginModalOpen(false); // Re-open LoginModalComp
    setSignModal(false);
  };

  return (
    <div>
      <BootstrapModal
        show={isLoginModalOpen && show}
        onHide={handleClose}
        centered
      >

      {welcomeform ? (
          <div className="welcome-header">
            <div className="welcome-header-one">
              <div>Hello Animesh,</div>
              <div>Welcome to Woohoo !</div>
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
                      <div>Login to your account</div>
                    </div>
                  </Modal.Header>
                  {showOTPForm ? (
                    <div className="login-header-otp-text">
                      Enter the OTP received on this number{" "}
                    </div>
                  ) : (
                    <div className="login-header-otp-text">
                      OTP will be sent to the number
                    </div>
                  )}
                </div>

                <div className="login-header-two">
                  {showOTPForm ? (
                    <Form
                      style={{
                        width: "-webkit-fill-available",
                        paddingTop: "0px",
                      }}
                      onSubmit={handleOTPSubmit}
                    >
                      {enteredMobileNumber && (
                        <div className="otp-change-label">
                          <div>+91 {enteredMobileNumber}</div>
                          <div>
                            <a className="otp-change-label-a" href="#">
                              change
                            </a>
                          </div>
                        </div>
                      )}

                      <div>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            aria-label="Enter OTP"
                            aria-describedby="mobile-prefix"
                            style={{ fontSize: "small" }}
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                          />{" "}
                        </InputGroup>

                        <div className="otp-timer-text">
                          {timer > 0 ? (
                            <>
                              <div
                                style={{
                                  color: "var(--Gray-Gray-500, #64748B)",
                                }}
                              >
                                Resend OTP in
                              </div>
                              <div style={{ color: "#1D86FF" }}>
                                00:{timer < 10 ? `0${timer}` : timer}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                style={{
                                  color: "var(--Gray-Gray-500, #64748B)",
                                }}
                              >
                                Resend OTP in
                              </div>
                              <div style={{ color: "#1D86FF" }}>Resend</div>
                            </>
                          )}
                        </div>

                        <div className="login-otp-button">
                          <Button
                            variant="primary"
                            className="custom-width-btn"
                            // onClick={handleSendOTP}
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>

                        <div className="otp-error-text">
                          {otpError && (
                            <div style={{ color: "red" }}>{otpError}</div>
                          )}
                        </div>
                      </div>
                    </Form>
                  ) : (
                    <Form
                      style={{
                        width: "-webkit-fill-available",
                        paddingTop: "0px",
                      }}
                    >
                      <div>
                        <InputGroup className="mb-3">
                          <InputGroup.Text
                            id="mobile-prefix"
                            className="mobile-country-code"
                          >
                            +91
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Mobile Number"
                            aria-label="Mobile Number"
                            aria-describedby="mobile-prefix"
                            style={{ fontSize: "small", borderLeft: "none" }}
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                          />{" "}
                        </InputGroup>
                      </div>
                      <div className="login-otp-button">
                        <Button variant="primary" onClick={handleSendOTP}>
                          Send OTP
                        </Button>
                      </div>
                    </Form>
                  )}
                </div>
              </div>
              <div className="modal-header-first-two">
                <div className="create-new-account">
                  <div>New to Woohoo? </div>
                  <div>
                    <a
                      style={{
                        fontWeight: 500,
                        cursor: "pointer",
                        color: "#1D86FF",
                      }}
                      href="#"
                      onClick={handleCreateAccountClick}
                    >
                      Create new account
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-header-second">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#">Google Privacy Policy</a> and{" "}
              <a href="#">Terms of Service</a> apply.
            </div>
          </div>
        )}
      </BootstrapModal>

      <SignModalComp show={signModal} handleClose={handleSignModalClose} />
    </div>
  );
};

export default LoginModalComp;
