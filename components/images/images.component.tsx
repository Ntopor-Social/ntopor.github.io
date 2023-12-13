import React from "react";

import styles from "./images.module.css";

const Images: React.FC<Props> = ({ images }) => {
  return (
    <div className={styles.images}>
      {images.slice(0, 4).map((image: any, index: number) => (
        <div className={styles.image} key={index}>
          <img src={image.value} alt="" />
        </div>
      ))}
      <div className={styles.image}>
        <p>{images.length - 4}</p>
      </div>
    </div>
  );
};

export default Images;

interface Props {
  images: any;
}
