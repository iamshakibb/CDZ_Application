import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "../Footer.module.scss";
import { faFacebook, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className={`col-md-3 col-6 col-lg-4 text-right ${classes.socialMedia}`}>
      <div>
        <p>Follow Us</p>
        <a href="https://www.linkedin.com/company/recruitdapp/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/HireWithLeo">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://www.facebook.com/recruitd/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <p className="mt-5">Copyright © CDZ 2020. All Rights Reserved. Registered in England and Wales. Company number: 12644183</p>
      </div>
    </div>
  );
}
