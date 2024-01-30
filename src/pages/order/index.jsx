import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Badge, Accordion, Button } from "react-bootstrap";
import "./order.css";
// import "./order.scss";

const RectangularContainer = () => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleToggleOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };
  return (
    <Row className="mx-0">
      <Col xs={12} md={8}>
        <Card className="custom-container pb-3">
          <Card.Body>
            {/* Row for label and order ID/content aligned to the left */}
            <Row className="border-bottom pad-10 mb-3">
              {/* Column for label, aligned to the left */}
              <Col xs={6} md={6} className="text-left">
                <div className="label-container">
                  <p className="pl-4 mb-0 fs-12 label-grey">ORDER ID:</p>
                  <p className="pl-4 mb-0 main-color fs-12">WO004932659</p>
                </div>
              </Col>
              <Col xs={6} md={6} className="text-right">
                <div className="label-container">
                  <p className="pl-4 mb-0 fs-12 label-grey">ORDER DATE:</p>
                  <p className="pl-4 mb-0 main-color fs-12">
                    14 Apr 2023, 20:14
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="border-bottom pb-3">
              {/* Column for label, aligned to the left */}
              <Col xs={5} md={5} className="text-left ">
                <div className="label-container">
                  <img
                    src="Images/amazon-card.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs={7} md={7} className="text-left pad-l20">
                <div className="label-container">
                  <p className="fs-14 cs-5 pb-1 n-wrap">
                    Amazon Shopping Voucher
                  </p>
                  <p className="fs-16 cs-6 pb-1">₹1000</p>
                  <p className="fs-12 cs-4 mb-2">
                    Value of Reward Points:<span className="mx-2">₹150</span>
                  </p>
                  <p className="fs-12 cs-4 mb-2">
                    Qty:<span className="mx-1">1</span>
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="border-bottom py-3">
              {/* Column for label, aligned to the left */}
              <Col xs={2} md={2} className="text-left main-color">
                <div className="label-container">
                  <p className="fs-10 cs-4">Send to</p>
                  <p className="fs-10 cs-4">Email</p>
                  <p className="fs-10 cs-4">Mobile</p>
                  <p className="fs-10 cs-4">From</p>
                </div>
              </Col>
              <Col xs={1} md={1} className="text-left">
                <div className="label-container">
                  <p className="fs-10 cs-4">:</p>
                  <p className="fs-10 cs-4">:</p>
                  <p className="fs-10 cs-4">:</p>
                  <p className="fs-10 cs-4">:</p>
                </div>
              </Col>
              <Col xs={9} md={9} className="text-left label-grey">
                <div className="label-container">
                  <p className="fs-10 cs-4">Amazon Shopping Voucher</p>
                  <p className="fs-10 cs-4">₹1000</p>
                  <p className="fs-10 cs-4">
                    Value of Reward Points:<span className="mx-2">₹150</span>
                  </p>
                  <p className="fs-10 cs-4">
                    Qty:<span className="mx-1">1</span>
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pt-3">
              {/* Column for label, aligned to the left */}
              <Col xs={2} md={2} className="text-left main-color">
                <div className="label-container">
                  <img
                    src="images/orders.png"
                    alt=""
                    className="img-fluid image-icon"
                  />
                </div>
              </Col>
              <Col xs={3} md={3} className="text-left">
                <div className="label-container">
                  <Badge bg="success" border="dark" borderRadius="8px">
                    Successful
                  </Badge>
                </div>
              </Col>
              <Col xs={5} md={5} className="text-left pt-1 pad-l10">
                <div className="label-container">
                  <p
                    className="toggle-button fs-12 cs-4 n-wrap"
                    variant="link"
                    onClick={handleToggleOrderSummary}
                  >
                    VIEW ORDER SUMMARY
                    <span
                      className={`toggle-arrow ${
                        showOrderSummary ? "open" : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </p>
                </div>
              </Col>
              <Col xs={2} md={2} className="text-left pad-l20 pt-1">
                <div className="label-container">
                  <p className="fs-12 cs-4">VIEW</p>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="label-container">
                {showOrderSummary && (
                  <div className="order-summary-content border-top mt-3">
                    <Row className="pt-3">
                      {/* Column for label, aligned to the left */}
                      <p className="fs-13 cs-4">PAYMENT BY</p>
                      <Col xs={9} md={9} className="text-left ">
                        <div className="label-container">
                          <p className="fs-13 cs-4 label-grey py-1 n-wrap">
                            UPI (Google Pay /Phone Pay/All Other UPI)
                          </p>
                        </div>
                      </Col>

                      <Col xs={3} md={3} className="text-right main-color">
                        <div className="label-container">
                          <p className="fs-13 cs-4 py-1">₹1007.50</p>
                        </div>
                      </Col>
                      <p className="fs-13 cs-4 pt-3">ORDER SUMMARY</p>

                      <Col xs={9} md={9} className="text-left">
                        <div className="label-container">
                          <p className="fs-13 cs-4 label-grey py-1 n-wrap">
                            Item(s) Subtotal
                          </p>
                          <p className="fs-13 cs-4 label-grey n-wrap">
                          Processing Fee(1.25% + GST)
                          </p>
                          <p className="fs-13 cs-4">
                            Grand Total
                          </p>
                        </div>
                      </Col>

                      <Col xs={3} md={3} className="text-right main-color">
                        <div className="label-container">
                          <p className="fs-13 cs-4  label-grey">₹1000</p>
                          <p className="fs-13 cs-4  label-grey">-₹7.50</p>
                          <p className="fs-13 cs-4 ">₹1007.50</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RectangularContainer;
