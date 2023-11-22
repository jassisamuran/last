import MainData_photo_text from "./MainData_photo_text";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Q1 from "../images/Question-Bank-510.jpg";
const MainData = () => {
  const boxStyle2 = {
    height: "400px", // Adjust the height as needed
    // backgroundColor: "yellow",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    marginTop: "10px",
    fontSize: "25px",
    marginTop: "30px",
  };

  const boxStyle = {
    height: "100%",
    // backgroundColor: "yellow",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    marginLeft: "50px",
  };
  return (
    <div>
      <Container fluid variant="primary">
        <Row
          style={{
            // height: "43vh",
            // width: "100%",
            backgroundColor: "black",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
            color: "white",
            width: "100%",
            height: "100%",
          }}
        >
          {/* data content one is image and second is */}
          <MainData_photo_text />
        </Row>
        <p
          style={{
            marginTop: "2vh", // Responsive margin top
            backgroundColor: "gray",
            marginLeft: "2vw", // Responsive margin left
            fontSize: "3vw", // Responsive font size
            padding: "2vw", // Responsive padding
            border: "2px solid black",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          |-_-_| The Edzorb Law Difference |-_-_|
        </p>
      </Container>
      <Container fluid>
        <Row>
          <h3>
            Question Bank <span style={{ color: "red" }}>By Edzorb Law</span>
          </h3>
          {/* Box 1: Photo with Text Above */}
          <Col xs={12} sm={6}>
            <div style={boxStyle}>
              {/* Photo */}
              <Image
                src={Q1}
                alt="Your Photo"
                // style={{ width: "80%", height: "90%", objectFit: "cover" }}
              />
              {/* Text Above Photo */}
              {/* <div style={textStyle}>
                <h3>Question Bank By Edzorb Law</h3>
              </div> */}
            </div>
          </Col>

          {/* Box 2: Description and Data Below */}
          <Col xs={12} sm={6}>
            <div style={boxStyle2}>
              {/* Description */}
              <p>
                <h4>
                  Our app offers high-yield QBanks that utilize visual learning
                  techniques, allowing learners to reinforce their understanding
                  of judicial concepts through interactive visual quizzes and
                  exercises, enhancing retention and comprehension.
                </h4>
              </p>
              {/* Data */}
              <div style={textStyle} className="maindataContainer">
                <p>
                  {/* <span>
                    {" "}
                    <i class="fa-solid fa-file-pdf"></i>
                    &nbsp;
                  </span>

                  <span>
                    {" "}
                    <i class="fa-solid fa-file-pdf"></i>
                    &nbsp;
                  </span>
                  <span>
                    <i class="fa-solid fa-file-pdf"></i>
                  </span> */}
                  <ul>
                    <li>
                      <i class="fa-solid fa-file-pdf"></i>&nbsp; CrPC QBank
                    </li>
                    <li>
                      <i class="fa-solid fa-file-pdf"></i>&nbsp; CPC QBank
                    </li>
                    <li>
                      <i class="fa-solid fa-file-pdf"></i>&nbsp; All Subjects
                      Qbank
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <Col>
              <h3>
                <i class="fa-brands fa-telegram fa-2xl"></i>&nbsp;Join Telegram
                Channel
              </h3>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainData;
