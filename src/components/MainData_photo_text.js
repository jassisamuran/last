import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import i1 from "../images/Y.png";

const MainData_photo_text = () => {
  return (
    <div style={{ marginTop: "0px", background: "grey" }}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          {/* Box for Text and Data */}
          <Col md={6}>
            <div className=" text-white rounded-3 p-3">
              {/* Your text and data goes here */}
              <h2 className="text-center">
                Turn Your Judiciary{" "}
                <span style={{ color: "#FF4500" }}>Dream Into Reality</span>
              </h2>
              <p className="text-center">
                Revolutionize Your Prelims + Mains + Interview Preparation in an
                Integrated Manner.
              </p>

              <h2 className="text-center ">
                #1 Most Downloaded Judicial Services App
              </h2>

              <p className="text-center">
                <i className="bi bi-google-play"></i>&nbsp;&nbsp;
                <i className="bi bi-apple"></i>
              </p>
            </div>
          </Col>
          {/* Box for Image */}
          <Col md={6} xs={12}>
            <div className=" rounded-3 p-3">
              {/* Your image goes here */}
              <img src={i1} alt="Your Image" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
      <p className="text-white w-100 mt-2 p-3">
        Why Edzorb Law App is ❤ by Over 10,000+ Users. Read Reviews
      </p>
    </div>
  );
};

export default MainData_photo_text;
