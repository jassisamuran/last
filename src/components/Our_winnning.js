import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurWinning = () => {
  return (
    <div>
      <div style={{ color: "red", marginBottom: "40px", marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>
          Our Winning
          <span style={{ color: "red" }}> Formula</span>
        </h3>
        <h3>
          {" "}
          Services to<span style={{ color: "black" }}> for Edzorblaw</span>
          &nbsp;
          <i className="fas fa-house"></i>
        </h3>
      </div>
      <div className="one-all-container">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <div className="se">
                <h4>
                  <i className="fas fa-chart-simple fa-bounce"></i>Research &
                  Analysis
                </h4>
                Our social media marketing agency can help you create a strong
                presence on Facebook through targeted ad campaigns, engaging
                content, and audience interaction.
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="se">
                <h4>
                  <i className="fas fa-check-double fa-bounce"></i>Planning
                </h4>
                We offer services to boost your Instagram presence with visually
                appealing content, ad campaigns, and influencer marketing.
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="se">
                <h4>
                  <i className="fas fa-check-double fa-bounce"></i>Execution
                </h4>
                We provide LinkedIn marketing services to help you reach the
                right audience, build credibility through thought leadership,
                and drive conversions.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <div className="se">
                <h4>
                  <i className="fas fa-desktop fa-bounce"></i>Monitoring &
                  Measuring
                </h4>
                We can optimize your Google My Business listing to improve your
                online visibility, attract potential leads, and increase your
                website traffic.
              </div>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <div className="se">
                <h4>
                  <i className="fas fa-bug fa-bounce"></i>Reporting &
                  Optimization
                </h4>
                Our social media marketing agency can assist you in building a
                strong Twitter presence through engaging content, targeted ad
                campaigns, and strategic community engagement.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurWinning;
