import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ClientSection.module.scss";
import Sliders from "../Sliders/Sliders";

export default function ClientSection({ marginTop }) {
  return (
    <div className={`${classes.client} mt-5 pt-5`}>
      <Container className={`${classes.clientFeedContainer}  align-items-center justify-content-center`} style={{ marginTop: `${marginTop}` }}>
        <Row>
          <div className="col-12 text-center">
            <h2>What Our Clients Say.</h2>
          </div>
        </Row>
        <Sliders />
      </Container>
    </div>
  );
}
