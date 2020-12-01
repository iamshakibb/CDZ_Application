import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact/Contact";
import classes from "./Footer.module.scss";
import Links from "./Links/Links";
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className={`py-5  ${classes.footer}`}>
      <Container>
        <Row>
          <Contact />
          <Links />
          <SocialMedia />
        </Row>
      </Container>
    </footer>
  );
}
