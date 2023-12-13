import React, { useState } from "react";

import styles from "./bills.module.css";
import Dash from "@/components/Dash/dash.component";
import SwitchButton from "@/components/button/switchButton.component";
import PlanCard, { PlanCardType } from "@/components/Cards/planCard.component";

const Bills: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
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
            <PlanCard />
            <PlanCard type={PlanCardType.SEC} />
            <PlanCard />
        </div>
      </div>
    </section>
  );
};

export default Bills;

