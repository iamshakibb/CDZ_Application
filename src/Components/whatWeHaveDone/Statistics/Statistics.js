import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Statistics.module.scss";

export default function Statistics() {
  return (
    <Container className="py-5 mt-5">
      <Row className={classes.statisticsContainer}>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>8</h2>
          <p>Years of Recruiting</p>
        </div>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>10</h2>
          <p>Years Sales Experience </p>
        </div>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>3K+</h2>
          <p>Candidate Interactions</p>
        </div>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>400+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>120+</h2>
          <p>Organisations Scaled</p>
        </div>
        <div className="col-md-4 col-8 mb-3 py-3">
          <h2>Unlimited</h2>
          <p>Family Adventures</p>
        </div>
      </Row>
    </Container>
  );
}
