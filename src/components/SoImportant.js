import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cover from "../images/law_attraction.webp";

const SoImportant = () => {
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <Row className="d-flex align-items-stretch">
          {/* Box for Image */}
          <Col xs={12} md={6}>
            <div
              className="h-100"
              style={{ border: "1px solid black", padding: "20px" }}
            >
              <img
                src={cover}
                alt="Your Image Alt Text"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Col>

          {/* Box for Text */}
          <Col xs={12} md={6}>
            <div
              className="h-100"
              style={{ border: "1px solid black", padding: "20px" }}
            >
              <h3>
                <b>
                  Why is Edzorblaw important in today’s thriving digital
                  marketing world?
                </b>
              </h3>
              <p style={{ marginTop: "20px" }}>
                Law enforcement agencies use social media for intelligence
                gathering and investigations. Monitoring social media activity
                can help identify potential criminal behavior, track
                individuals, and prevent or respond to illegal activities.
                Social media enables witnesses to come forward and share their
                experiences, providing a platform for individuals to report and
                document incidents. This can contribute to public awareness of
                legal issues, helping law enforcement and legal professionals to
                understand the scope and impact of certain events. Legal
                professionals use social media for legal research, staying
                updated on recent legal developments, and engaging in
                professional communication. Platforms like LinkedIn provide
                opportunities for networking and knowledge exchange among legal
                professionals.
              </p>
              <br />
              <Button variant="dark" className="mt-3">
                <i className="fas fa-phone fa-beat"></i>&nbsp; Contact Us Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SoImportant;
