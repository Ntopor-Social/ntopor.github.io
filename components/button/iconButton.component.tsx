import React from "react";
import { ButtonSize, ButtonType } from "./button.component";

import styles from "./button.module.css";

const IconButton: React.FC<Props> = ({
  type = ButtonType.PRI,
  onClick,
  icon,
  size = ButtonSize.NORMAL,
}) => {
  let _typeVar: string = "";
  if (type === ButtonType.PRI) {
    _typeVar = "bg-white";
  }
  if (type === ButtonType.SEC) {
    _typeVar = "bg-main-theme-color";
  }
  if (type === ButtonType.TER) {
    _typeVar = "bg-white/10";
  }

  let _sizeVar: string = "";
  if (size === ButtonSize.MEDIUM) {
    _sizeVar = "h-[70px]";
  }
  if (size === ButtonSize.NORMAL) {
    _sizeVar = "h-[55px]";
  }
  if (size === ButtonSize.SMALL) {
    _sizeVar = "h-[32px]";
  }
  return (
    <button
      onClick={onClick}
      className={`${styles.iconButton} ${_typeVar} ${_sizeVar}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;

interface Props {
  type?: ButtonType;
  onClick?: () => {};
  icon: JSX.Element;
  size?: ButtonSize;
}
