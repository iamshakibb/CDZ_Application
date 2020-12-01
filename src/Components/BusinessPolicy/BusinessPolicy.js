import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import classes from "./BusinessPolicy.module.scss";

export default function BusinessPolicy() {
  return (
    <div className={`d-flex align-items-center ${classes.businessPolicy}`}>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <div className="col-md-8 text-center">
            <p>
              Most businesses talk about B2B (business to business) experiences, but here at CDZ, we are obsessed with H2H (human to human) experiences. We drive emotional
              connections with our clients, which is why we are the UK’s leading experts in building high-performance teams and cultures.
            </p>
            <h6 className="mt-4">Let us show you how!</h6>
            <Button className={`mt-4 py-2 px-4 ${classes.btn} ${classes.businessBtn}`}>Book a free 30 minute consultation</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
