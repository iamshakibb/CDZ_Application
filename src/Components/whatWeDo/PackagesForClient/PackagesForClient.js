import React from "react";
import { Container, Row } from "react-bootstrap";
import packageImg from "../../../images/Ellipse 20.png";
import packageImg1 from "../../../images/Ellipse 21.png";
import packageImg2 from "../../../images/Ellipse 22.png";
import classes from "./PackagesForClient.module.scss";

export default function PackagesForClient() {
  return (
    <Container>
      <Row className="mb-4">
        {/* 1st */}
        <div className="col-md-4">
          <div className={classes.package}>
            <div className={classes.packageImg}>
              <img src={packageImg} alt="package Img" />
            </div>
            <div className={classes.packageTitle}>
              <h5>The Galileo Package</h5>
              <p>Become a guru of sales, by refreshing your sales systems and processes. </p>
            </div>
            <div className={classes.packageDetails}>
              <p>Monthly Face to Face/Video meeting to review Sales Progress</p>
              <p>Unlimited Access to Sales Content</p>
              <p>Accountability Partner & Soundboard</p>
              <p>Invite to Annual CDZ Networking Event</p>
              <p>Call us anytime - You are not alone.</p>
              <p>Access to 'Discover Phenomenal' content (Lifestyle Brand - Fitness, Fuel & Mindfulness).</p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="col-md-4">
          <div className={classes.package}>
            <div className={classes.packageImg}>
              <img src={packageImg1} alt="package Img" />
            </div>
            <div className={classes.packageTitle}>
              <h5>The Aristotle Package</h5>
              <p>Build an exclusive talent pool and become a master of your sales and marketing strategies.</p>
            </div>
            <div className={classes.packageDetails}>
              <p>Monthly Face to Face/Video meeting to review Sales Progress</p>
              <p>Weekly Workshop - Sales Coaching & Mentorship on Prospecting, Business Development and New Sales.</p>
              <p>Accountability Partner & Soundboard</p>
              <p>Introductions to CDZ extensive ERP Network (Partner Alliance).</p>
              <p>Invites to all CDZ Events (Annual and Quarterly Networking Events).</p>
              <p>25% Discount for Professional Recruitment Services</p>
              <p>Access to 'Discover Phenomenal' content and online training (Lifestyle Brand - Fitness, Fuel & Mindfulness).</p>
              <p>Call us anytime - You are not alone.</p>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="col-md-4">
          <div className={classes.package}>
            <div className={classes.packageImg}>
              <img src={packageImg2} alt="package Img" />
            </div>
            <div className={classes.packageTitle}>
              <h5>The Plato Package</h5>
              <p>Grow your business to new levels, become your very own ‘sales master’ and perfect leadership. </p>
            </div>
            <div className={classes.packageDetails}>
              <p>ALL ACCESS!</p>
              <p>Daily video calls - Sales Pipeline, Sales Review, Sales Coaching & Mentorship</p>
              <p>50% Discount for Professional Recruitment Services</p>
              <p>ALL ACCESS to 'Discover Phenomenal' (Lifestyle Brand - Fitness, Fuel & Mindfulness)</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
