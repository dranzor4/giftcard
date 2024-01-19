import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import "./order.css";
// import "./order.scss";

const RectangularContainer = () => {
  return (
    <Row className="">
      <Col xs={12} md={8}>
        <Card className="custom-container ">
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
              <Col xs={1} md={1} className="text-left ">
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
            <Row className="border-bottom py-3">
              {/* Column for label, aligned to the left */}
              <Col xs={6} md={6} className="text-left main-color">
                <Row className="border-bottom py-3">
                  {/* Column for label, aligned to the left */}
                  <Col xs={6} md={6} className="text-left main-color">
                    <div className="label-container">
                    <img
                    src="Images/order.png"
                    alt=""
                    className="img-fluid"
                  />
                    </div>
                  </Col>

                  <Col xs={6} md={6} className="text-left pad-l20 label-grey">
                    <div className="label-container">
                      <p className="fs-10 cs-4">Amazon Shopping Voucher</p>
                      <p className="fs-10 cs-4">₹1000</p>
                      <p className="fs-10 cs-4">
                        Value of Reward Points:
                        <span className="mx-2">₹150</span>
                      </p>
                      <p className="fs-10 cs-4">
                        Qty:<span className="mx-1">1</span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={6} md={6} className="text-left pad-l20 label-grey">
              <Row className="border-bottom py-3">
                  {/* Column for label, aligned to the left */}
                  <Col xs={6} md={6} className="text-left main-color">
                    <div className="label-container">
                      <p className="fs-10 cs-4">Send to</p>
                      <p className="fs-10 cs-4">Email</p>
                      <p className="fs-10 cs-4">Mobile</p>
                      <p className="fs-10 cs-4">From</p>
                    </div>
                  </Col>

                  <Col xs={6} md={6} className="text-left pad-l20 label-grey">
                    <div className="label-container">
                      <p className="fs-10 cs-4">Amazon Shopping Voucher</p>
                      <p className="fs-10 cs-4">₹1000</p>
                      <p className="fs-10 cs-4">
                        Value of Reward Points:
                        <span className="mx-2">₹150</span>
                      </p>
                      <p className="fs-10 cs-4">
                        Qty:<span className="mx-1">1</span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Row for card content aligned to the right */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RectangularContainer;
