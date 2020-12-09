import React from "react";
import ClientSection from "../ClientSection/ClientSection";
import MainContext from "../MainContext/MainContext";
import NavBar from "../NavBar/NavBar";
import FounderSection from "./FounderSection/FounderSection";
import Statistics from "./Statistics/Statistics";
import Footer from "../Footer/Footer";
import classes from "./whatWeHaveDone.module.scss";

export default function whatWeHaveDone() {
  const heading = "What We've Done";
  const mainText =
    "We are proud of our journey so far. We are proud of the companies we have helped scale to produce one of a kind, high performance teams and cultures. And most importantly we are proud to be stronger together.";
  return (
    <>
      <div className={classes.primaryBg}>
        <NavBar />
        <MainContext heading={heading} mainText={mainText} />
      </div>
      <div className={classes.founderBg}>
        <FounderSection />
      </div>
      <Statistics />
      <div className={classes.clientFeedContainer}>
        {/* sending props for margin top for client section */}
        <ClientSection marginTop="-250px" />
      </div>

      <Footer />
    </>
  );
}
