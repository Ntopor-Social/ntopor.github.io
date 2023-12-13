import React, { Dispatch, SetStateAction, useState } from "react";

import styles from "./input.module.css";
import ChevronIcon from "../Icons/ChevronIcon";

const DropDownInput: React.FC<Props> = ({
  label,
  options,
  icon,
  selected,
  setSelected = () => {},
}) => {
  const [drop, setDrop] = useState<boolean>(false);

  const handledSelection = (value: Options) => {
    setSelected(value);
    setDrop(false);
  }
  return (
    <div className={styles.searchParam}>
      <label>{label}</label>
      <div className={styles.dropDown}>
        <button
          className={styles.dropDownButton}
          onClick={() => setDrop(!drop)}
        >
          <div className={styles.dropText}>
            {icon}
            <span>{selected?.label}</span>
          </div>
          <ChevronIcon className={styles.dropIcon} />
        </button>
        <div
          className={`${styles.dropItems} ${drop ? styles.droppedItems : ""}`}
        >
          {options.map((option, index: number) => (
            <button
              key={index}
              className={styles.dropItem}
              onClick={() => handledSelection(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownInput;

interface Props {
  label: string;
  options: Options[];
  selected?: Options;
  setSelected?: Dispatch<SetStateAction<Options>>;
  icon?: JSX.Element;
}

export interface Options {
  value: string | number;
  label: string;
}
