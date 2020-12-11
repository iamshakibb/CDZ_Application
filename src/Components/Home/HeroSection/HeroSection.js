import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import classes from "./HeroSection.module.scss";
import HeroImage from "../../../images/Ellipse 18.png";
import FormModal from "../../FormModal/FormModal";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseFormModal,
  OpenFormModal,
} from "../../../Redux/Actions/FormModalAction";

export default function HeroSection() {
  const isFormModalOpen = useSelector((state) => state.FormModal);
  const dispatch = useDispatch();
  return (
    <div className={`d-flex align-items-center ${classes.heroSection}`}>
      <Container>
        <Row>
          <div className="col-md-6 d-flex align-items-center">
            <div className={classes.heroContext}>
              <h1>
                Strong<span>.</span> Together<span>.</span>
              </h1>
              <p className="mt-4">
                We are experts in building high performance cultures by
                challenging the status quo, creating lasting industry impact and
                being a catalyst for change.
              </p>
              <Button
                className={`mt-3 ${classes.HeroBtn} ${classes.btn}`}
                onClick={() => dispatch(OpenFormModal())}
              >
                Get in Touch
              </Button>
              <FormModal
                show={isFormModalOpen}
                onHide={() => dispatch(CloseFormModal())}
              />
            </div>
          </div>
          <div className={`col-md-6 ${classes.heroImg}`}>
            <img className="img-fluid" src={HeroImage} alt="HeroImage" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
