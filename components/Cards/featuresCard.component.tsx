import React from "react";

import styles from "./card.module.css";

const FeaturesCard: React.FC<Props> = ({ reverse = false, data }) => {
  return (
    <div
      className={`${styles.featureCard} ${
        !reverse ? "flex-col" : "flex-col xl:flex-col-reverse xl:justify-start"
      }`}
    >
      <div className={styles.featureTitle}>
        <h6>{data.title}</h6>
        <p>{data.description}</p>
      </div>
      <div className={styles.featureImage}>
        <img src={data.image} alt="App Image" />
      </div>
    </div>
  );
};

export default FeaturesCard;

interface Props {
  reverse?: boolean;
  data: any;
}
