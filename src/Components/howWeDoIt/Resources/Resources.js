import React from "react";
import { Container, Row } from "react-bootstrap";
import ResourcesImg from "../../../images/Rectangle 80.png";
import ResourcesImg1 from "../../../images/Rectangle 81.png";
import ResourcesImg2 from "../../../images/Rectangle 82.png";
import ResourcesImg3 from "../../../images/Rectangle 83.png";
import classes from "./Resources.module.scss";

export default function Resources() {
  return (
    <Container className="my-5 py-5">
      <h2 className={`mb-5 pb-5 ${classes.heading}`}>Resources</h2>
      <Row>
        <div className="col-md-6">
          <div className={classes.resourcesImg}>
            <img className="img-fluid" src={ResourcesImg} alt="resourcesImage" />
          </div>
        </div>
        <div className="col-md-6 ">
          <Row>
            <div className="col-md-12">
              <div className={classes.resourcesImg}>
                <img className="img-fluid" src={ResourcesImg1} alt="resourcesImage" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={classes.resourcesImg}>
                <img className="img-fluid" src={ResourcesImg2} alt="resourcesImage" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={classes.resourcesImg}>
                <img className="img-fluid" src={ResourcesImg3} alt="resourcesImage" />
              </div>
            </div>
          </Row>
        </div>
        <div className="col-md-12 py-5 my-3 d-flex align-items-center justify-content-end">
          <button className={classes.articleBtn}>View All Arcticles</button>
        </div>
      </Row>
    </Container>
  );
}
