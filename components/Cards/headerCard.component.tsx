import React from "react";
import IconButton from "../button/iconButton.component";
import HeartIcon from "../Icons/HeartIcon";

import styles from "./card.module.css";
import { ButtonSize } from "../button/button.component";
import MapPinIcon from "../Icons/MapPinIcon";
import StopWatchIcon from "../Icons/StopWatchIcon";
import { Assets } from "@/static/assets/assets";
import Images from "../images/images.component";

const HeaderCard: React.FC = () => {
  const images = [
    {value: Assets.iphone2, label: "Iphone2"},
    {value: Assets.iphone2, label: "Iphone2"},
    {value: Assets.iphone2, label: "Iphone2"},
    {value: Assets.iphone2, label: "Iphone2"},
    {value: Assets.iphone2, label: "Iphone2"},
    {value: Assets.iphone2, label: "Iphone"},
  ]
  return (
    <div className={styles.headerCard}>
      <div className={styles.headerCardImage}>
        <img src="" alt="" />
        <div className={styles.headerIcon}>
          <IconButton
            size={ButtonSize.SMALL}
            icon={
              <HeartIcon className="stroke-main-theme-color h-[18px] w-[18px]" />
            }
          />
        </div>
      </div>
      <div className={styles.stats}>
        <h6>GuitarGlamour</h6>
        <div className={styles.statsDetails}>
            <div className={styles.statsDets}>
                <MapPinIcon className={styles.statsIcon} />
                <p>New York, USA</p>
            </div>
            <div className={styles.statsDets}>
                <StopWatchIcon className={styles.statsIcon} />
                <p>May 29 - 10:00 PM</p>
            </div>
        </div>
        <div className={styles.statsDetails}>
            <p>$35.00 <span>/Person</span></p>
            <Images images={images} />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
