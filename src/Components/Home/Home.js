import React from "react";
import { useSelector } from "react-redux";
import AboutUS from "../AboutUS/AboutUS";
import BusinessPolicy from "../BusinessPolicy/BusinessPolicy";
import ClientSection from "../ClientSection/ClientSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";
import "./Home.scss";

export default function Home() {
  const isModalOpenReducer = useSelector((state) => state.IsModalOpen);

  // if isModalOpenReducer === true then hide the PrimaryBannerImg section
  if (isModalOpenReducer) {
    document.querySelector(".PrimaryBannerImg").style.display = "none";
  }
  return (
    <>
      <Modal />
      <div className="PrimaryBannerImg">
        <NavBar />
        <HeroSection />
        <div className="d-flex align-items-center secondaryBannerImg">
          <AboutUS />
        </div>
        <Services />
        <ClientSection />
        <BusinessPolicy />
        <Footer />
      </div>
    </>
  );
}
