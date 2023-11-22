import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import I1 from "../images/why.png";
const ServiceTrustShown = () => {
  return (
    <div style={{ width: "400px" }}>
      <Carousel pause="hover" className="bg-dark" slide={true}>
        <Carousel.Item>
          {/* <Link to={`/product/${product._id}`}> */}
          <Image src={I1} alt={"one"} fluid />
          <Carousel.Caption>
            <h2>fsfsfs fsf js fs f</h2>
          </Carousel.Caption>
          {/* </Link> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ServiceTrustShown;
