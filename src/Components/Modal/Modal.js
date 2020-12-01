import React, { useState } from "react";
import classes from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Redux/Actions/IsModalOpenAction";
import CongratulationsSection from "./CongratulationsSection";
import ModalForm from "./ModalForm";

export default function Modal() {
  // fetching data from redux store
  const isModalOpen = useSelector((state) => state.IsModalOpen);
  const dispatch = useDispatch();
  const [congSection, setCongSection] = useState(false);

  // animation for modal
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  // function for handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0 && e.target[2].value.length > 0) {
      setCongSection(true);
    }
  };

  //function to hide the congratulations section
  const hideCong = () => {
    if (document.querySelector(".PrimaryBannerImg") !== null && isModalOpen !== false) {
      document.querySelector(".PrimaryBannerImg").style.display = "block";
      setCongSection(false);
    }
  };
  return (
    <>
      {isModalOpen ? (
        <div className={classes.background}>
          <animated.div style={animation} className=" d-flex align-items-center justify-content-center">
            <Container className={classes.modalWrapper}>
              <Row>
                {congSection ? <CongratulationsSection hideCong={hideCong} /> : <ModalForm handleSubmit={handleSubmit} hideCong={hideCong} />}
                <div className={`col-md-6 ${classes.modalImg} desktop`}>
                  <FontAwesomeIcon
                    onClick={() => {
                      dispatch(closeModal());
                      hideCong();
                    }}
                    icon={faTimes}
                    className={classes.closeModalButton}
                  />
                </div>
              </Row>
            </Container>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}
