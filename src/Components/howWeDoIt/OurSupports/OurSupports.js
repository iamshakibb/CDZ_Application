import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./OurSupports.module.scss";

export default function OurSupports() {
  return (
    <Container>
      <Row>
        <div className={`col-lg-4 col-md-12 ${classes.support}`}>
          <div>
            <h3>Best Interest</h3>
            <p>
              Every action or decision made will always be in your best interest
              to bring you the results you’re looking for.
            </p>
          </div>
        </div>
        <div className={`col-lg-4 col-md-12 ${classes.support}`}>
          <div className={classes.support}>
            <h3>Results focused</h3>
            <p>
              Your goals are our goals and we will do everything to achieve
              them.
            </p>
          </div>
        </div>
        <div className={`col-lg-4 col-md-12 ${classes.support}`}>
          <div className={classes.support}>
            <h3>Caring</h3>
            <p>
              And above all else, we care about the success of your business.
              It’s why we’re here after all.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}
