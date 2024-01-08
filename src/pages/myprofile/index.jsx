import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./myprofile.css";

const divStyle = {
  width: "35px",
  height: "35px",
  // backgroundColor :'black',
  borderRadius: "50%",
};
const MyProfile = () => {
  return (
    <Card border="lightgrey" className="m-3">
      <Card.Body>
        <Container>
          <Row className="align-items-center border-bottom pb-2">
            <Col xs="auto">
              <div className="circle">
              <span className="initial">A</span>
              </div>
            </Col>
            <Col>
              <div className="name">Animesh Mandal</div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>

    //     <Container className="frame">
    //     <Row  className="div align-items-center border-bottom ">
    //       <Col xs={3} className="avatars">
    //         <div className="text-wrapper">A</div>
    //       </Col>
    //       <Col xs={9} className="text-wrapper-2">
    //         Animesh Mandal
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <div className="text-wrapper-3">Email</div>
    //         <div className="text-wrapper-4">animeshmandal@gmail.com</div>
    //       </Col>
    //     </Row>
    //     <Row className="justify-content-end">
    //       <Col xs={6}>
    //         <div className="text-wrapper-3">Mobile number</div>
    //         <div className="text-wrapper-4">+91 9652855555</div>
    //       </Col>
    //       <Col xs={6} className="text-right">
    //         <div className="text-wrapper-3">Date of Birth</div>
    //         <div className="text-wrapper-4">20-03-2000</div>
    //       </Col>
    //     </Row>
    //   </Container>
  );
};

export default MyProfile;
