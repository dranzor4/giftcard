import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import "./order.css";
// import "./order.scss";

const RectangularContainer = () => {
  return (
    <Row className="">
      <Col xs={12} md={8}>
        <Card className="custom-container">
          <Card.Body>
            {/* Row for label and order ID/content aligned to the left */}
            <Row className="border-bottom pad-10">
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
            <Row className="m-0">
              <Col xs={5} className="p-0">
                <img
                  src="Images/amazon-card.png"
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col xs={7} className="cart-data pad-20">
                <p className="h14">Amazon Shopping Voucher</p>
                <p className="h16">₹1000</p>
                <p className="h12">Value of Reward Points: ₹150</p>
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
