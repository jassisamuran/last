import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TogetherGrow = () => {
  return (
    <div>
      <div style={{ color: "white", marginBottom: "40px", marginTop: "20px" }}>
        <h3>
          TOGETHER WE
          <span> GROW</span>
        </h3>
        <h3>
          {" "}
          AND MARKET YOUR BUSINESS!
          <span style={{ color: "black" }}>
            &nbsp;<i className="fas fa-house"></i>
          </span>
        </h3>
      </div>
      <div className="one-all-containers">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-4" style={{ color: "white" }}>
              <div className="se1">
                <h4>
                  <i className="fas fa-briefcase"></i>Quality Work
                </h4>
                For the past 8 years, we have been delivering quality content
                writing services like blogs, articles, and property descriptions
                to one of India's top real estate portals.
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4" style={{ color: "white" }}>
              <div className="se1">
                <h4>
                  <i className="far fa-clock"></i>Timely Response
                </h4>
                On average, we design and deliver approximately 12 to 15
                high-quality posts per day, ensuring that we meet the social
                media requirements of our clients promptly and effectively.
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4" style={{ color: "white" }}>
              <div className="se1">
                <h4>
                  <i className="fas fa-brain"></i>Creative Minds
                </h4>
                With expertise in using tools such as Canva, Photoshop, and
                other design software, our designers create eye-catching and
                engaging posts that leave a lasting impression.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="mb-4" style={{ color: "white" }}>
              <div className="se1">
                <h4>
                  <i className="fas fa-truck"></i>Proven Track Record
                </h4>
                We have clients who return after a gap of 6 months or more,
                showcasing the proven track record of our effectiveness and the
                trust they place in our digital marketing services.
              </div>
            </Col>
            <Col xs={12} md={6} className="mb-4" style={{ color: "white" }}>
              <div className="se1">
                <h4>
                  <i className="fas fa-hand-holding-dollar"></i>Affordable
                  Pricing
                </h4>
                Our pricing structure is transparent and tailored to suit the
                unique requirements of each client, making our digital marketing
                services accessible and affordable.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TogetherGrow;
