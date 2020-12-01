import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Services.module.scss";

export default function Services() {
  return (
    <Container className={`py-5 my-5 ${classes.services}`}>
      <h2 className="mb-4 mt-5">
        Our Services<span>.</span>
      </h2>
      <Row className={`align-items-baseline ${classes.servicesContext}`}>
        <div className="col-md-5 mt-5">
          <h5>Business Growth</h5>
          <hr />
          <h5 className="mt-5">Team Growth</h5>
        </div>
        <div className="col-md-7">
          <p>
            Put simply, our ‘business growth’ services, enable our clients to acquire customers in innovative ways. We work with business leaders to deep dive into everything that
            is holding them back, identify where they want to be and to implement lasting change through tried and tested techniques and strategies.
          </p>
        </div>
      </Row>
    </Container>
  );
}
