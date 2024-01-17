import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import style from "./my-gift-card.module.css";
import Accordion from "react-bootstrap/Accordion";

const MyGiftCard = () => {
  const [isAccordionActive, setIsAccordionActive] = useState(false);

  // Function to toggle accordion state
  const toggleAccordion = () => {
    setIsAccordionActive(!isAccordionActive);
  };
  const jsonDataArray = [
    {
      id: 1,
      cardTitle: "Myntra eGift Card",
      quantity: "₹200",
      availableBalance: "1000.00",
      expiryDate: "14 April 2024",
    },
    {
      id: 2,
      cardTitle: "Another Card",
      quantity: "₹100",
      availableBalance: "500.00",
      expiryDate: "31 December 2023",
    },
    {
      id: 3,
      cardTitle: "Arbaaz",
      quantity: "₹400",
      availableBalance: "-500.00",
      expiryDate: "31 September 2023",
    },
    // Add more data sets as needed
  ];
  return (
    <div>
      <Accordion
        activeKey={isAccordionActive ? "0" : null}
        onSelect={toggleAccordion}
      >
        <Accordion.Item eventKey="0" className="m-3">
          <Accordion.Header>
            <Container>
              <Row className="align-items-center border-bottom pb-2">
                <Col xs="auto">
                  <div className={`${style.circle} border`}>
                    <img src="./images/myntra.png" alt="" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>Myntra</div>
                    <p className={style.textright}>₹1000.00</p>
                  </div>
                </Col>
              </Row>
              
            </Container>
          </Accordion.Header>
          {!isAccordionActive && (
            <Container>
              <Row className="px-2 pb-3">
                <Col xs="7">
                  <div className={style.name}>Items available</div>
                </Col>
                <Col xs="5" className={style.textright}>
                  <div className={style.name}>03</div>
                </Col>
              </Row>
            </Container>
          )}

          {jsonDataArray.map((data) => generateAccordionBody(data))}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const generateAccordionBody = (data, index, dataArrayLength) => {
  const balanceColor = parseFloat(data.availableBalance) >= 0 ? "green" : "red";
  const balanceStyle = {
    color: balanceColor,
  };
  const lastItemClass = index === dataArrayLength - 1 ? 'pb-3' : '';
  console.log(index);
  console.log(lastItemClass);

  return (
    <Accordion.Body key={data.id} className={lastItemClass} >
      <Card border="lightgrey" >
        <Card.Body>
          <Container className="">
            <Row className="align-items-center border-bottom pb-2">
              <Col xs="9">
                <div className={style.name}>{data.cardTitle}</div>
              </Col>
              <Col xs="3" className={style.textright}>
                <div className={style.name}>{data.quantity}</div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row className="mx-1 my-2">
            <Col xs="6">
              <div className={`${style.name}  ${style.label}`} >Available Balance</div>
              <div className={`${style.name} `} style={balanceStyle}>
                {data.availableBalance}
              </div>
            </Col>
            <Col xs="6" className={`${style.textright}`}>
              <div className={`${style.name}  ${style.label}`}>Expiry Date</div>
              <div className={style.name}>{data.expiryDate}</div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Accordion.Body>
  );
};

export default MyGiftCard;
