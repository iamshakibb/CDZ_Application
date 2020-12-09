import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./MainContext.module.scss";

export default function MainContext({ heading, mainText }) {
  return (
    <div>
      <Container>
        <Row className={`${classes.mainContextContainer} text-center justify-content-center align-items-center`}>
          <div className="col-md-7 my-5 py-5">
            <h1>
              {heading}
              <span>.</span>
            </h1>
            <p>{mainText}</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
