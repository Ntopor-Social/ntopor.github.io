import React from "react";

import styles from "./features.module.css";
import Dash from "@/components/Dash/dash.component";
import { Assets } from "@/static/assets/assets";
import FeaturesCard from "@/components/Cards/featuresCard.component";

const Features: React.FC = () => {
  const data: any = [
    {
      title: "Explore Nearby Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: Assets.iphone,
      reverse: false,
    },
    {
      title: "View Your Favourite Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: Assets.iphone,
      reverse: true,
    },
    {
      title: "Live Chat & Call",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: Assets.iphone,
      reverse: false,
    },
  ];
  return (
    <section className={styles.container} id="features">
      <div className={styles.containerTop}>
        <div className={styles.topTitle}>
          <div className={styles.topTitleContainer}>
            <Dash /> <h3>Best Features</h3>
          </div>
          <h4>
            <span>Key Features</span> of Our Event Booking App
          </h4>
        </div>
        <div className={styles.topDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={styles.containerBottom}>
        {data.map((datum: any, index: number) => (
          <FeaturesCard key={index} reverse={datum.reverse} data={datum} />
        ))}
      </div>
    </section>
  );
};

export default Features;
