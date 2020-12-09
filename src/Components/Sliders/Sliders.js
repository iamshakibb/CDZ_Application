import React from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import person from "../../images/person(1).png";
import person2 from "../../images/person(2).png";
import classes from "./Sliders.module.scss";

export default function Sliders() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className={`d-flex align-items-center clientFeed ${classes.clientFeedback}`}>
        <Row className="align-items-center w-100">
          <div className={`col-md-3 text-center h-100 ${classes.clientImg}`}>
            <img src={person} alt="client" />
          </div>
          <div className={`col-md-9 h-100 ${classes.clientFeedbackContext}`}>
            <h4>Craig Press</h4>
            <p className={classes.clientTitle}>Ceo at Bluecloud</p>
            <p className="text-justify">
              We place interim SAP professionals or contingent SAP talent. We understand interim project implementation means you need the right talent, fast. At CDZ, we can
              deliver just this - with our extensive database, experience and extended reach into the SAP talent pool.
            </p>
          </div>
        </Row>
      </div>
      <div className={`d-flex align-items-center clientFeed ${classes.clientFeedback}`}>
        <Row className="align-items-center w-100">
          <div className={`col-md-3 text-center h-100 ${classes.clientImg}`}>
            <img src={person2} alt="client" />
          </div>
          <div className={`col-md-9 h-100 ${classes.clientFeedbackContext}`}>
            <h4>Craig Press</h4>
            <p className={classes.clientTitle}>Ceo at Bluecloud</p>
            <p className="text-justify">
              We place interim SAP professionals or contingent SAP talent. We understand interim project implementation means you need the right talent, fast. At CDZ, we can
              deliver just this - with our extensive database, experience and extended reach into the SAP talent pool.
            </p>
          </div>
        </Row>
      </div>
    </Slider>
  );
}
