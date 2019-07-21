import React from "react";
import styles from "./typography.module.scss";

export const P = props => {
  return (
    <p {...props} className={styles.paragraph}>
      {props.children}
    </p>
  );
};
