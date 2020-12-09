import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Services.module.scss";

export default function Services() {
  return (
    <Container className={`py-5 my-5 ${classes.services}`}>
      <h2 className="mb-4 mt-5">
        Our Services<span>.</span>
      </h2>
      <Row className={`align-items-baseline mt-5 ${classes.servicesContext}`}>
        <div className="col-md-6  mt-5">
          <div className="col-md-12">
            <h5>Business Growth</h5>
            <hr />
          </div>
          <div className="col-md-12">
            <p className="mt-5">
              Put simply, our ‘business growth’ services, enable our clients to acquire customers in innovative ways. We work with business leaders to deep dive into everything
              that is holding them back, identify where they want to be and to implement lasting change through tried and tested techniques and strategies.
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="col-md-12">
            <h5>Team Growth</h5>
            <hr />
          </div>
          <div className="col-md-12">
            <p className="mt-5">
              The most important resource and the soul of any business is it’s people. Our in-house talent specialists help growing businesses identify their existing ‘talent gaps’
              and devise strategies to help them source, attract and retain the world’s best talent.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}
