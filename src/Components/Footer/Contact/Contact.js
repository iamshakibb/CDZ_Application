import React from "react";
import { Row } from "react-bootstrap";
import classes from "../Footer.module.scss";
import Logo from "../../../images/Group.png";

export default function Contact() {
  return (
    <div className="col-md-6 col-lg-4">
      <Row className={classes.contact}>
        <div className="footerLogo col-md-12">
          <img src={Logo} alt="LOGO" />
        </div>
        <div className="col-md-6 col-6 mt-4">
          <p>CDZ</p>
          <p>
            First Floor, 20 Chiswell St. <br /> London EC1Y 4TW
          </p>
        </div>
        <div className={`col-md-6 col-6 ${classes.contactInfo}`}>
          <a href="tel:+44 (0) 01302246454">+44 (0) 01302246454</a>
          <br />
          <a href="mailto:admin@cdz.co.uk">admin@cdz.co.uk</a>
        </div>
      </Row>
    </div>
  );
}
