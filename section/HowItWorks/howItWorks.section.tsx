import React from "react";

import styles from "./how.module.css";
import Dash from "@/components/Dash/dash.component";
import Illustration from "@/components/Icons/Illustration";
import SignUpIcon from "@/components/Icons/SignUpIcon";
import UserIcon from "@/components/Icons/UserIcon";
import MapPinIcon from "@/components/Icons/MapPinIcon";
import BookIcon from "@/components/Icons/BookIcon";

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.container} id="how-it-works">
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>How It Works</h3>
        </div>
        <h4>
          How It Works: <span>A Step-by-Step Guide</span>
        </h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomIllustration}>
          <Illustration className={styles.bottomIllustrationIcon} />
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepIconContainer}>
              <SignUpIcon className={styles.stepIcon} />
            </div>
            <div className={styles.stepDetail}>
              <h6>Sign Up</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIconContainer1}>
              <UserIcon className={styles.stepIcon1} />
            </div>
            <div className={styles.stepDetail}>
              <h6>Create Profile & Add Preferences </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIconContainer1}>
              <MapPinIcon className={styles.stepIcon1} />
            </div>
            <div className={styles.stepDetail}>
              <h6>Browse Nearby Events</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIconContainer1}>
              <BookIcon className={styles.stepIcon1} />
            </div>
            <div className={styles.stepDetail}>
              <h6>Book Event Ticket</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
