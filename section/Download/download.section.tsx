import React from "react";

import styles from "./download.module.css";
import Button, { ButtonSize, ButtonType } from "@/components/button/button.component";
import { Assets } from "@/static/assets/assets";
import AndroidIcon from "@/components/Icons/AndroidIcon";
import AppleIcon from "@/components/Icons/AppleIcon";

const Download: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <h3>
          Download Our <span>Event Booking</span> App Today!
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className={styles.stats}>
          <div className={styles.statsDetail}>
            <h6>5 Million+</h6>
            <p>Woldwide Active Users</p>
          </div>
          <div className={`${styles.statsDetail} ${styles.margin}`}>
            <h6>60+</h6>
            <p>Countries</p>
          </div>
          <div className={`${styles.statsDetail} ${styles.margin}`}>
            <h6>5K+</h6>
            <p>Organizers</p>
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.rightCard}>
          <div className={styles.rightCardTitle}>
            <h6>For iOS</h6>
            <p>iOS 16.5+</p>
          </div>
          <div className={styles.rightCardButton}>
            <Button text="Download App" type={ButtonType.PRI} size={ButtonSize.NORMAL} />
          </div>
          <div className={styles.rightCardQR}>
            <img src={Assets.qrcode} alt="" />
          </div>
          <div className={styles.rightCardIcon}>
            <AppleIcon className={styles.rightIcon} />
          </div>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.rightCardTitle}>
            <h6>For Android</h6>
            <p>Android 8.0+</p>
          </div>
          <div className={styles.rightCardButton}>
            <Button text="Download App" type={ButtonType.PRI} />
          </div>
          <div className={styles.rightCardQR}>
            <img src={Assets.qrcode} alt="" />
          </div>
          <div className={styles.rightCardIcon}>
            <AndroidIcon className={styles.rightIcon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
