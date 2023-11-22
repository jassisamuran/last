import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import I1 from "../images/1.avif";
import I2 from "../images/2.avif";
import I3 from "../images/4.jpg";
// import I4 from "../images/4.avif";
const FAQSection = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4>
        {" "}
        The Force Behind<span style={{ color: "red" }}> Our Success</span>
      </h4>
      <h3>
        <span style={{ color: "red" }}>AMAZING TEAM</span> MEMBERS
      </h3>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I1} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                Sudiv ruhi
              </h4>
              <p>
                HR Manager{" "}
                <p>
                  <i class="fa-brands fa-linkedin fa-fade fa-xl"></i>
                  &nbsp;
                  <i class="fa-brands fa-facebook fa-fade fa-xl"></i>&nbsp;
                  <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
                </p>
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I2} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                Ruhi jwan
              </h4>
              <p>
                Social Media Design&nbsp;{" "}
                <p>
                  <i class="fa-brands fa-linkedin fa-fade fa-xl"></i>&nbsp;
                  <i class="fa-brands fa-facebook fa-fade fa-xl"></i>&nbsp;
                  <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
                </p>
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            {/* Item 1 */}
            <div className="bg-light p-3">
              {/* Responsive image inside h4 heading */}
              <h4>
                <Image
                  src={I3} // Replace with the URL of your image
                  alt="Item 1 Image"
                  fluid
                  roundedCircle // Apply rounded corners to the image
                  className="mr-2" // Add additional styling if needed
                />
                Jahy Duin
              </h4>
              <p>
                Buisness Development &nbsp;{" "}
                <p>
                  <i class="fa-brands fa-linkedin fa-fade fa-xl"></i>&nbsp;
                  <i class="fa-brands fa-facebook fa-fade fa-xl"></i>&nbsp;
                  <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
                </p>
              </p>
            </div>
          </Col>

          {/* Add more Col components for additional items */}
        </Row>
      </Container>
    </div>
  );
};

export default FAQSection;
