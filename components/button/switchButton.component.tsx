import React, { Dispatch, SetStateAction } from "react";

import styles from "./button.module.css";

const SwitchButton: React.FC<Props> = ({ active, setActive }) => {
  return (
    <div
      className={`${styles.switchButton} ${active ? "justify-start" : "justify-end"}`}
      onClick={() => setActive(!active)}
    >
      <div className={`${styles.switch}`} />
    </div>
  );
};

export default SwitchButton;

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
