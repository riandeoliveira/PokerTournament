import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const MainArea = (): ReactElement => {
  return (
    <div className={styles.main_area_component}>
      <span className={styles.s1}>05:45</span>
      <span className={styles.s2}>300 / 600</span>
      <span className={styles.s3}>400 / 600</span>
    </div>
  );
};
