import React from "react";

import styles from "./demo.module.css";
import Dash from "@/components/Dash/dash.component";
import PlayIcon from "@/components/Icons/PlayIcon";

const Demo: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>App Demo</h3>
        </div>
        <h4>
          View <span>Our App Demo</span>
        </h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.playContainer}>
          <div className={styles.playButton}>
            <PlayIcon className={styles.playIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
