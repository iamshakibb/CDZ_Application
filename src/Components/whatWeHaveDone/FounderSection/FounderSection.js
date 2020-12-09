import React from "react";
import { Container, Row } from "react-bootstrap";
import Founder from "../../../images/Ellipse 19.png";
import classes from "./FounderSection.module.scss";

export default function FounderSection() {
  return (
    <Container className={classes.founderSectionContainer}>
      <Row className="justify-content-center align-items-center">
        <div className="col-md-4">
          <img className="img-fluid" src={Founder} alt="Founder Img" />
        </div>
        <div className="col-md-8">
          <p>
            Our Founder, Mark Komsinki, brings a wealth of knowledge and experience to CDZ. Shaping the business around his own instinctive values and creating a growth business
            that is more personable and transparent than most.
          </p>
          <p>
            We are dedicated to supporting small organisations, startups and entrepreneurs specialising in all industries, by empowering business owners to become more
            self-sufficient in prospecting, business development and sales.
          </p>
        </div>
      </Row>
    </Container>
  );
}
