import React from "react";
import { Container, Row } from "react-bootstrap";
import FreeTrialBtn from "../FreeTrialBtn/FreeTrialBtn";
import classes from "./FreeTrial.module.scss";
export default function FreeTrial({ freeTrialText, freeTrialHeading }) {
  return (
    <Container>
      <Row className="mt-5 justify-content-center align-items-center">
        <div className={`col-md-10 ${classes.freeTrialContainer}`}>
          <p>{freeTrialText}</p>
          <h5>{freeTrialHeading}</h5>
          <FreeTrialBtn />
        </div>
      </Row>
    </Container>
  );
}
