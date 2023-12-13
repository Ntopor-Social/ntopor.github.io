import React, { useState } from "react";

import styles from "./faq.module.css";
import Dash from "@/components/Dash/dash.component";
import faqs from "@utils/faq.json";

const FAQ: React.FC = () => {
  const [FAQ, setFAQ] = useState(faqs[0]);
  return (
    <section id="faq" className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTitleContainer}>
          <Dash /> <h3>FAQ</h3>
        </div>
        <h4>
          <span>Questions?</span> Look here.
        </h4>
      </div>
      <div className={styles.containerBottom}>
        {faqs.map((faq: any, index: number) => (
          <div
            className={`${styles.accordion} ${
              JSON.stringify(FAQ) === JSON.stringify(faq)
                ? styles.accordionActive
                : "bg-main-off-white"
            }`}
            key={index}
            onClick={() => setFAQ(faq)}
          >
            <div className={styles.accordionTitle}>
              <h6
                className={`${
                  JSON.stringify(FAQ) === JSON.stringify(faq)
                    ? "text-white"
                    : "text-main-black"
                }`}
              >
                {faq.question}
              </h6>
              <div
                className={`${styles.accordionIcon} ${
                  JSON.stringify(FAQ) === JSON.stringify(faq)
                    ? styles.activeIcon
                    : ""
                }`}
              />
            </div>
            <div
              className={`${styles.accordionContent} ${
                JSON.stringify(FAQ) === JSON.stringify(faq)
                  ? styles.activeContent
                  : ""
              }`}
            >
              <p
                className={`${
                  JSON.stringify(FAQ) === JSON.stringify(faq)
                    ? "text-white"
                    : "text-main-black"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
