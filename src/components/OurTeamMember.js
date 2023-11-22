import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Slider from "./Slider";
import I1 from "../images/why.png";
import I2 from "../images/Y.png";
const OurTeamMember = () => {
  const slides = [
    {
      imageSrc: { I1 },
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      imageSrc: { I2 },
      title: "Slide 2",
      description: "Description for Slide 2",
    },
  ];

  return (
    <div style={{ backgroundColor: "green" }}>
      <Slider slides={slides} />
    </div>
  );
};

export default OurTeamMember;
