import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import classes from "./ClientSection.module.scss";
import person from "../../images/person(1).png";
import person2 from "../../images/person(2).png";

export default function ClientSection() {
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
    <div className={`${classes.client} my-5 py-5`}>
      <Container className="align-items-center justify-content-center">
        <Row>
          <div className="col-12 text-center">
            <h2>What Our Clients Say.</h2>
          </div>
        </Row>
        <Slider {...settings}>
          <div className={`d-flex align-items-center ${classes.clientFeedback}`}>
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
          <div className={`d-flex align-items-center ${classes.clientFeedback}`}>
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
      </Container>
      <div className={classes.clientFeedContainer}></div>
    </div>
  );
}
