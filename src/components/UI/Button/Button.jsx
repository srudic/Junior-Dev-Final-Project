import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, icon, titleColor, onClickButton }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClickButton) onClickButton();
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleClick}>
        {title && (
          <span
            className={styles.buttonSpan}
            style={titleColor ? { color: titleColor } : {}}
          >
            {title}
          </span>
        )}
        <div className={styles.icon}>{icon}</div>
      </button>
    </div>
  );
};

export default Button;
