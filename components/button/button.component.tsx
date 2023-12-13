import React from "react";

import styles from "./button.module.css";

const Button: React.FC<Props> = ({
  text,
  type = ButtonType.PRI,
  disabled = false,
  size = ButtonSize.NORMAL,
  icon,
}) => {
  let _typeVar: string = "";
  let _sizeVar: string = "";
  if (type === ButtonType.PRI) {
    _typeVar = "bg-main-theme-color text-white border-main-theme-color";
  }
  if (type === ButtonType.SEC) {
    _typeVar =
      "bg-main-off-white text-main-theme-color border-main-theme-color";
  }
  if (size === ButtonSize.NORMAL) {
    _sizeVar = "!text-sm";
  }

  if (size === ButtonSize.MEDIUM) {
    _sizeVar = "!text-base";
  }
  return (
    <button
      className={`${styles.button} ${_typeVar} ${_sizeVar} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;

interface Props {
  text: string;
  disabled?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => {};
  icon?: JSX.Element;
}

export enum ButtonType {
  PRI,
  SEC,
  TER,
}

export enum ButtonSize {
  SMALL,
  NORMAL,
  MEDIUM,
}
