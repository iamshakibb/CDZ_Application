import React from "react";
import classes from "./Modal.module.scss";
import Congratulations from "../../images/Congratulations.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { closeModal } from "../../Redux/Actions/IsModalOpenAction";

export default function CongratulationsSection({ hideCong }) {
  const dispatch = useDispatch();
  return (
    <div className={`col-md-6 text-center ${classes.modalContent}`}>
      <FontAwesomeIcon
        onClick={() => {
          dispatch(closeModal());
          hideCong();
        }}
        icon={faTimes}
        className={`${classes.closeModalButton} mobile`}
      />
      <img className={classes.CongImg} src={Congratulations} alt="gif" />
      <h4 className="mt-5">Congratulations Your Form Submitted</h4>
      <p>We will contact you soon..</p>
    </div>
  );
}
