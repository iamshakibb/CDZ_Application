import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { closeModal } from "../../Redux/Actions/IsModalOpenAction";
import classes from "./Modal.module.scss";

export default function ModalForm({ handleSubmit, hideCong }) {
  const dispatch = useDispatch();
  return (
    <div className={`col-md-6 ${classes.modalContent}`}>
      <FontAwesomeIcon
        onClick={() => {
          dispatch(closeModal());
          hideCong();
        }}
        icon={faTimes}
        className={`${classes.closeModalButton} mobile`}
      />
      <h2>Fill Up your Information</h2>
      <p>This will help us to know you better.</p>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" name="name" className="w-75" placeholder="Enter Full Name" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" name="email" className="w-75" placeholder="Enter Your Email" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Telephone</Form.Label>
          <Form.Control required type="tel" name="mobile" className="w-75" placeholder="Enter Your Telephone Number" />
        </FormGroup>
        <FormGroup>
          <Form.Group>
            <Form.File accept="application/pdf, application/vnd.ms-excel" name="resume" required id="exampleFormControlFile1" label="submit your Resume in Pdf formate" />
          </Form.Group>
        </FormGroup>
        <FormGroup className="text-right">
          <button className={`${classes.btn} py-2`} type="submit">
            submit
          </button>
        </FormGroup>
      </form>
    </div>
  );
}
