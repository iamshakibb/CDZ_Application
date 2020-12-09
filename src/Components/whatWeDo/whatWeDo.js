import React from "react";
import Footer from "../Footer/Footer";
import FreeTrial from "../FreeTrial/FreeTrial";
import MainContext from "../MainContext/MainContext";
import NavBar from "../NavBar/NavBar";
import Introduction from "./Introduction/Introduction";
import PackagesForClient from "./PackagesForClient/PackagesForClient";
import classes from "./whatWeDo.module.scss";

export default function whatWeDo() {
  const heading = "What We Do";
  const mainText = "We work with our client to define their ambition, understand their marketplace and affirm their goals and vision.";
  const freeTrialText = "Discover what package is right for you by booking a free 30 minute consultation";
  return (
    <>
      <div className={classes.primaryBg}>
        <NavBar />
        <MainContext heading={heading} mainText={mainText} />
      </div>
      <div className={classes.introductionContainer}>
        <Introduction />
      </div>
      <PackagesForClient />
      <div className="py-5 my-5">
        <FreeTrial freeTrialText={freeTrialText} freeTrialHeading="" />
      </div>
      <Footer />
    </>
  );
}
