import React from "react";

import styles from "./card.module.css";
import Button, { ButtonType } from "../button/button.component";
import CheckIcon from "../Icons/CheckIcon";

const PlanCard: React.FC<Props> = ({ type = PlanCardType.PRI }) => {
  let _typeVar: string[] = [];
  if (type === PlanCardType.PRI) {
    _typeVar = [
      "bg-white",
      "text-main-black",
      "text-main-black",
      "fill-main-theme-color",
    ];
  }
  if (type === PlanCardType.SEC) {
    _typeVar = [
      "bg-main-theme-color",
      "text-white",
      "text-white",
      "fill-white",
    ];
  }
  return (
    <div className={`${styles.planCard} ${_typeVar[0]}`}>
      <div className={styles.planPrice}>
        <p className={_typeVar[1]}>
          $29
          <span className={_typeVar[2]}>/month</span>
        </p>
      </div>
      <h6 className={_typeVar[1]}>Basic</h6>
      <p className={_typeVar[2]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className={styles.divider} />
      <div className={styles.planDetails}>
        <div className={styles.planDetail}>
          <CheckIcon className={`${styles.planCheckIcon} ${_typeVar[3]}`} />
          <p className={_typeVar[2]}>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={styles.planDetail}>
          <CheckIcon className={`${styles.planCheckIcon} ${_typeVar[3]}`} />
          <p className={_typeVar[2]}>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={styles.planDetail}>
          <CheckIcon className={`${styles.planCheckIcon} ${_typeVar[3]}`} />
          <p className={_typeVar[2]}>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className={styles.planButton}>
        <Button text="Choose Plan" type={ButtonType.SEC} />
      </div>
    </div>
  );
};

export default PlanCard;

interface Props {
  type?: PlanCardType;
}

export enum PlanCardType {
  PRI,
  SEC,
}
