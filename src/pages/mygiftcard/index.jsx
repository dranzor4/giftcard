import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./my-gift-card.css";
import Accordion from "react-bootstrap/Accordion";
import { myGiftCardsData } from "../../utils/constants/constants";
import ButtonTab from "../../components/ButtonTab";

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
      <div className="myGiftCardHeader">
        <div className="headerText">
          <img src="/Images/left-arrow.svg" alt="left-arrow" />
          <div className="headerTextTitle">My Gift Cards</div>
        </div>
        <div className="headerDropdown">dropdown</div>
      </div>

      <div className="buttonTab">
        <ButtonTab
          data={myGiftCardsData}
          defaultSelected={myGiftCardsData[0]?.id}
        />
      </div>
      <Accordion
        activeKey={isAccordionActive ? "0" : null}
        onSelect={toggleAccordion}
      >
        <Accordion.Item eventKey="0" className="m-3">
          <Accordion.Header>
            <Container>
              <Row className="align-items-center border-bottom pb-2">
                <Col xs="auto">
                  <div className="circle border">
                    <img src="./images/myntra.png" alt="" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>Myntra</div>
                    <p className="textright">₹1000.00</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Header>
          {!isAccordionActive && (
            <Container>
              <Row className="mb-3">
                <Col xs="7">
                  <div className="name">Items available</div>
                </Col>
                <Col xs="5" className="textright">
                  <div className="name">03</div>
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

const generateAccordionBody = (data) => {
  const balanceColor = parseFloat(data.availableBalance) >= 0 ? "green" : "red";
  const balanceStyle = {
    color: balanceColor,
  };

  return (
    <Accordion.Body key={data.id}>
      <Card border="lightgrey">
        <Card.Body>
          <Container>
            <Row className="align-items-center border-bottom pb-2">
              <Col xs="9">
                <div className="name">{data.cardTitle}</div>
              </Col>
              <Col xs="3" className="textright">
                <div className="name">{data.quantity}</div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row className="mb-3">
            <Col xs="6">
              <div className="name label">Available Balance</div>
              <div className="name" style={balanceStyle}>
                {data.availableBalance}
              </div>
            </Col>
            <Col xs="6" className="textright">
              <div className="name label">Expiry Date</div>
              <div className="name">{data.expiryDate}</div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Accordion.Body>
  );
};

export default MyGiftCard;
