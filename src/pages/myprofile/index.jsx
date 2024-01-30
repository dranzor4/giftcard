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
    <div>
      <Card border="lightgrey" className="m-3 profile-card">
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
        <Container>
          <Row className="mt-3">
            <Col xs="12">
              <div className="info-label">Email:</div>
              <div className="info-value">sam@example.com</div>
            </Col>
            <Col xs="6">
              <div className="info-label">Mobile Number:</div>
              <div className="info-value">9879879878</div>
            </Col>
            <Col xs="6" className="text-right">
              <div className="info-label">Date of Birth:</div>
              <div className="info-value">04-01-2000</div>
            </Col>
          </Row>
        </Container>
      </Card>
      <Card border="lightgrey" className="m-3">
        <Card.Body>
          <Container>
            <Row className="align-items-center border-bottom pb-2">
             
              <Col>
                <div className="name">Your HDFC Cards</div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row className="mt-3">
            
            <Col xs="6">
            <img 
              className="d-block w-100 profile-image"
              src="images/profile-card1.png"
              alt="Second slide"
              
            />
            </Col>
            <Col xs="6" className="text-right ">
            <img
              className="d-block w-100 profile-image"
              src="images/profile-card2.png"
              alt="Second slide"
            />
            </Col>
          </Row>
        </Container>
      </Card>
      <Card border="lightgrey" className="m-3">
        <Card.Body>
          <Container>
          <Row className="align-items-center border-bottom pb-2">
             
             <Col>
               <div className="name">Billing Details</div>
             </Col>
           </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row className="mt-3">
          <Col xs="12">
              <div className="info-value">A-2, Udyog Nagar Indl Area, Peeragarhi Chowk, Rohtak Road 110041, India</div>
              {/* <div className="info-value">sam@example.com</div> */}
            </Col>
            
          </Row>
        </Container>
      </Card>
    </div>

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
