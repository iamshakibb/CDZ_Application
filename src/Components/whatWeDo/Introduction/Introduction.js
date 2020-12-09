import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <Container>
      <Row className="py-5 mt-5 justify-content-center align-items-center">
        <div className={`py-5 mt-5 col-md-10 col-12 ${classes.introductionContainer}`}>
          <p>
            When working with our clients to scale their businesses, we dig deeper than most. For us, it is a case of really understanding what our clients want and the visions
            they have for their business.
          </p>
          <p>We believe that if you get the foundations right, everything else falls into place.</p>
          <p>
            That's why we have trained our expert consultants in the art of ‘discovery’. We leave no stone unturned when it comes to understanding an organisation and set no limits
            when devising high impact solutions and strategies that will define your business.
          </p>
        </div>
      </Row>
    </Container>
  );
}
