import React, { useState } from "react";

import styles from "./testimonial.module.css";
import Dash from "@/components/Dash/dash.component";
import { Assets } from "@/static/assets/assets";
import StarIcon from "@/components/Icons/StarIcon";
import QuoteIcon from "@/components/Icons/QuoteIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Testimonial: React.FC = () => {
  const [active, setActive] = useState<number>(3);

  const handlePrev = (topOffers: number) => {
    if (active !== 0) {
      return setActive(active - 1);
    }
    return setActive(topOffers - 1);
  };

  const handleNext = (topOffers: number) => {
    if (active !== topOffers - 1) {
      return setActive(active + 1);
    }
    return setActive(0);
  };
  return (
    <section id="testimonial" className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>Testimonial</h3>
        </div>
        <h4>
          Our Customer <span>Testimonials</span>
        </h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.controlButton} onClick={() => handleNext(8)}>
          <ChevronIcon className={styles.controlIcon} />
        </div>
        {Array(8)
          .fill(0)
          .map((_, index: number) => (
            <div
              key={index}
              className={`${styles.testimonialCard}
              ${index + 2 === active ? styles.prev1 : ""} ${
                index < active - 2 ? styles.prev2 : ""
              }  ${active === index + 1 ? styles.prev : ""} ${
                index > active ? styles.next : ""
              } ${index > active + 1 ? styles.next1 : ""} ${
                index > active + 2 ? styles.next2 : ""
              } ${active === index ? styles.current : ""}`}
            >
              <div
                className={`${styles.testimonialCardImage} ${
                  active === index && styles.testimonialCardImageShadow
                }`}
              >
                <img src={Assets.iphone} alt="UserImage" />
              </div>
              <div
                className={`${styles.testimonialCustomer} ${
                  active !== index ? styles.opacity0 : styles.opacity100
                }`}
              >
                <h6>Shan Lee</h6>
                <p>Satified customer</p>
              </div>
              <div
                className={`${styles.ratingContainer} ${
                  active !== index ? styles.opacity0 : styles.opacity100
                }`}
              >
                <StarIcon className={styles.ratingIcon} />
                <StarIcon className={styles.ratingIcon} />
                <StarIcon className={styles.ratingIcon} />
                <StarIcon className={styles.ratingIcon} />
              </div>
              <div
                className={`${styles.quoteContainer} ${
                  active !== index ? styles.opacity0 : styles.opacity100
                }`}
              >
                <QuoteIcon className={styles.quoteIcon} />
                <p>
                  I can't believe how easy it was to find and book events with
                  this app! It's a game-changer for anyone who loves to attend
                  exciting gatherings. Highly recommended!
                </p>
                <QuoteIcon className={styles.quoteIcon1} />
              </div>
            </div>
          ))}
        <div className={styles.controlButton1} onClick={() => handlePrev(8)}>
          <ChevronIcon className={`${styles.controlIcon1}`} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
