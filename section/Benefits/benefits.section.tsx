import React from "react";

import styles from "./benefits.module.css";
import Dash from "@/components/Dash/dash.component";
import PrivacyIcon from "@/components/Icons/PrivacyIcon";
import SecureIcon from "@/components/Icons/SecureIcon";
import T24HourIcon from "@/components/Icons/T24HourIcon";

const Benefits: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>The Best Event Booking App</h3>
        </div>
        <h4>
          Our <span>Event Booking App</span> Benefits
        </h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <PrivacyIcon className={styles.benIcon} />
          </div>
          <div className={styles.benefitDetail}>
            <h6>Privacy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <SecureIcon className={styles.benIcon} />
          </div>
          <div className={styles.benefitDetail}>
            <h6>Secure Payments</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <T24HourIcon className={styles.benIcon} />
          </div>
          <div className={styles.benefitDetail}>
            <h6>24x7 Support</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
