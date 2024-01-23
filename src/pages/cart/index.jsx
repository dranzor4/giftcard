import React from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import arrowDown from "../../assets/images/icon/down-arrow.svg";
import "./Cart.css";

const Cart = () => {
  const handleCartAcc = () => {
    console.log("yo");
  };

  return (
    <>
      <Container className="cart-item">
        <Row>
          <Col xs={5} className="p-0">
            <Image src="Images/amazon-card.png" alt="" fluid />
          </Col>
          <Col xs={7} className="cart-data">
            <p className="h14">Amazon Shopping Voucher</p>
            <p className="h16">₹1000</p>
            <p className="h12">Value of Reward Points: ₹150</p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={5} className="p-0">
            <p className="h12 text-primary">
              View more details
              <i className="cart-icon">
                <Image src={arrowDown} alt="" onClick={handleCartAcc} />
              </i>
            </p>
          </Col>
          <Col xs={7} className="text-center">
            <Row>
              <Col xs={5} className="cart-select">
                <Form.Group controlId="cart-qty">
                  <Form.Label>Qty:</Form.Label>
                  <Form.Control as="select" className="h12">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={7} className="cart-add-del pt-2">
                <span className="btn-edit px-1">Edit</span>
                <span className="px-1">Delete</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Row className="my-2">
        <Col xs={5}>
          <p className="h12">Sub total</p>
          <p className="h18">₹2000</p>
        </Col>
        <Col xs={7} className="px-2 cart-btn">
          <Button variant="primary" className="w-100 h-100">
            Proceed to Buy
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
