import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import arrowDown from "../../assets/images/icons/arrow-down.svg";
import "./Cart.css";
import Dropdown from "react-bootstrap/Dropdown";
import CustomQty from "../../components/CustomQty";

const Cart = () => {
  const handleCartAcc = () => {
    console.log("yo");
  };
  const options = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container className="cart-item">
        <Row className="my-2">
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
              <Col xs={5}>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="quantity-dropdown">
                    Qty:
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={7} className="cart-add-del pt-2">
                <span className="btn-edit px-1">Edit</span>
                <span className="px-1">Delete</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="cart-footer">
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
      </Container>
    </>
  );
};
export default Cart;
