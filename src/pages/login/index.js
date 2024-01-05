import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      // Here you would typically send the OTP to the entered mobile number
      console.log("Sending OTP...");
    } else {
      setIsMobileValid(false);
    }
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    setIsMobileValid(true);
  };

  return (
    <>
      <div className="login-container">
        <div className="close-icon" onClick={() => window.close()}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div>
          <h6>Welcome to Woohoo</h6>
          <h2>
            <b>Login to your account</b>
          </h2>
          <h6 className="login-h6-style" style={{ opacity: "0.7" }}>
            OTP will be sent to the number
          </h6>
        </div>
        <Form className="login-form">
          <InputGroup className="mb-3">
            <InputGroup.Text id="mobile-prefix">+91</InputGroup.Text>
            <Form.Control
              type="tel"
              placeholder="Mobile number"
              aria-label="Mobile Number"
              aria-describedby="mobile-prefix"
              style={{ fontSize: "small" }}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
          </InputGroup>
          {!isMobileValid && (
            <div style={{ marginTop: "10px", color: "red" }}>
              Please enter a valid 10-digit mobile number.
            </div>
          )}
          <Button
            variant="primary"
            className="custom-width-btn"
            onClick={handleSendOTP}
          >
            Send OTP
          </Button>
        </Form>
        <div style={{ marginTop: "30px" }}>
          <div className="form-footer">
            <h6 className="login-h6-style">
              New to Woohoo ?{" "}
              <Link to="/create-account">
                <b>Create new account</b>
              </Link>
            </h6>
          </div>

          <h6 className="login-h6-style">
            This site is protected by reCAPTCHA and the{" "}
            <Link to="/privacy-policy">Google Privacy Policy</Link> and{" "}
            <Link to="/terms-of-service">Terms Of Service</Link> apply
          </h6>
        </div>
      </div>
    </>
  );
};

export default Login;
