import React from "react";

import styles from "./header.module.css";
import PlayStoreButton from "@/components/Icons/PlayStoreButton";
import PlusIcon from "@/components/Icons/PlusIcon";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import AppleStoreButton from "@/components/Icons/AppleStoreButton";
import { Assets } from "@/static/assets/assets";
import WavesIcon from "@/components/Icons/WavesIcon";
import Dash from "@/components/Dash/dash.component";
import { useRouter } from "next/router";
import HeaderCard from "@/components/Cards/headerCard.component";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <section id="#" className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.leftTitleContainer}>
          <Dash /> <h1>The Best Event Booking App</h1>
        </div>
        <h2>
          The Ultimate <span>Event Booking</span> Experience
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <div className={styles.storeContainer}>
          <button className={styles.storeButton}>
            <PlayStoreButton className={styles.storeIcon} />
          </button>
          <button className={styles.storeButton}>
            <AppleStoreButton className={styles.storeIcon} />
          </button>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.statsUsers}>
            <div className={`${styles.statsUser}`}>
              <img src="" alt="" />
            </div>
            <div className={`${styles.statsUser} ${styles.margin}`}>
              <img src="" alt="" />
            </div>
            <div className={`${styles.statsUser} ${styles.margin}`}>
              <img src="" alt="" />
            </div>
            <div className={`${styles.statsUser} ${styles.margin}`}>
              <img src="" alt="" />
            </div>
            <div
              className={`${styles.statsUser} ${styles.margin} ${styles.whiteBackground}`}
            >
              <PlusIcon className={styles.addUser} />
            </div>
          </div>
          <div className={styles.statsDetails}>
            <h6>5 million +</h6>
            <p>Worldwide users</p>
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.rightBox}>
          <div className={styles.rightCircle}>
            <img src={Assets.iphone} alt="iphone image" />
          </div>
            <img src={Assets.iphone} alt="iphone image" />
            <div className={styles.waves}>
              <WavesIcon className={styles.wavesIcon} />
            </div>
            <div className={styles.card}>
              <HeaderCard />
            </div>
        </div>
      </div>
      <div className={styles.crown}> <div className={styles.throne} /> </div>
      <div className={styles.scrollDown}>
        <div className={styles.scrollDownButton} onClick={() => router.push("#footer")}>
          <ArrowIcon className={styles.scrollDownIcon} />
        </div>
      </div>
    </section>
  );
};

export default Header;
