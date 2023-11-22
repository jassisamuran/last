import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import teamwork from "../images/why.png";
const WhyPage_in_for_detail = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Container className="photo-detail-container">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <Image src={teamwork} alt="Your Photo" fluid />
          </Col>
          <Col md={6}>
            <div className="details">
              <h2>Why Choose Edzorblaw Best For You </h2>
              <p>We understand all of your needs just try once because if</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyPage_in_for_detail;
