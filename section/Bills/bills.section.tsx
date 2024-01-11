import React, { useState } from "react";

import styles from "./bills.module.css";
import Dash from "@/components/Dash/dash.component";
import SwitchButton from "@/components/button/switchButton.component";
import PlanCard, { PlanCardType } from "@/components/Cards/planCard.component";

const Bills: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [active1, setActive1] = useState<number>(1);
  return (
    <section id="bills" className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>Pricing & Plans</h3>
        </div>
        <h4>
          Let's Know the Pricing <span>Plan for you</span>
        </h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.switchContainer}>
          <h6>Bill Monthly</h6>
          <SwitchButton active={active} setActive={setActive} />
          <h6>Bill Annually</h6>
        </div>
        <div className={styles.planContainer}>
          {Array(3)
            .fill(0)
            .map((_, index: number) => (
              <div
                key={index}
                className={`${styles.carouselContent} ${
                  index < active1 ? styles.prevContent : ""
                } ${index === active1 ? styles.currentContent : ""} ${
                  index > active1 ? styles.nextContent : ""
                } ${index > active1 + 1 ? styles.disappear : ""}`}
              >
                <PlanCard
                  type={index === 1 ? PlanCardType.SEC : PlanCardType.PRI}
                />
              </div>
            ))}
        </div>
        <div className={styles.carouselControls}>
          {Array(3)
            .fill(0)
            .map((_, index: number) => (
              <div
                onClick={() => setActive1(index)}
                key={index}
                className={[
                  styles.carouselIndicate,
                  active1 === index && styles.indicateActive,
                ].join(" ")}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Bills;
