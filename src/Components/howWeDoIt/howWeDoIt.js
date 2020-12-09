import React from "react";
import MainContext from "../MainContext/MainContext";
import NavBar from "../NavBar/NavBar";
import classes from "./howWeDoIt.module.scss";
import OurSupports from "./OurSupports/OurSupports";
import Resources from "./Resources/Resources";
import Footer from "../Footer/Footer";

export default function howWeDoIt() {
  const heading = "How We Do It";
  const mainText =
    "Our approach is different. Here at CDZ we take real pride and take a genuine interest in each and every one of our clients. Our discovery calls are tailored to you individually, allowing you to lead and layout all areas of your business that you need help with.";
  return (
    <>
      <div className={classes.primaryBg}>
        <NavBar />
        <MainContext heading={heading} mainText={mainText} />
      </div>
      <div className={classes.supportBg}>
        <OurSupports />
      </div>
      <Resources />
      <Footer />
    </>
  );
}
