import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./AboutUS.module.scss";

export default function AboutUS() {
  return (
    <Container className={`mt-5 justify-content-end d-flex ${classes.aboutUS}`}>
      <Row className="mt-5 justify-content-end align-items-center">
        <div className={`col-md-7 ${classes.aboutContext}`}>
          <h2>
            Why CDZ <span>?</span>
          </h2>
          <p className="mt-3">Serving people is in our DNA, it always has been!</p>
          <p>
            Our years of experience has taught us that for every startup or scaleup to thrive, they need to have the correct tools, go-to-market strategies and market intelligence
            to do so.
          </p>
          <p>
            We have perfected the art of ‘business growth’ and have partnered with organisations across the globe to not only enable them to get to the top of their game, but our
            team gives business leaders the tools they need to stay on top.
          </p>
        </div>
      </Row>
    </Container>
  );
}
