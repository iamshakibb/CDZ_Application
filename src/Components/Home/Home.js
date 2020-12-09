import React from "react";
import AboutUS from "./AboutUS/AboutUS";
import ClientSection from "../ClientSection/ClientSection";
import Footer from "../Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Services from "./Services/Services";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";
import FreeTrial from "../FreeTrial/FreeTrial";

export default function Home() {
  const freeTrialText =
    "Most businesses talk about B2B (business to business) experiences, but here at CDZ, we are obsessed with H2H (human to human) experiences. We drive emotional connections with our clients, which is why we are the UK’s leading experts in building high-performance teams and cultures.";
  const freeTrialHeading = "Let us show you how!";
  return (
    <>
      <div className="PrimaryBannerImg">
        <NavBar />
        <HeroSection />
      </div>
      <div className="d-flex align-items-center secondaryBannerImg">
        <AboutUS />
      </div>
      <Services />
      <div className="clientFeedContainer">
        {/* sending props for margin top for client section */}
        <ClientSection marginTop="-360px" />
      </div>
      <div className="freeTrialBg">
        <FreeTrial freeTrialText={freeTrialText} freeTrialHeading={freeTrialHeading} />
      </div>
      <Footer />
    </>
  );
}
