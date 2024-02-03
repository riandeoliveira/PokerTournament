import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const TotalPrizeArea = observer((): ReactElement => {
  return (
    <div className={styles.total_prize_area_component}>
      <div className={styles.total_container}>
        <span className={styles.total_label}>Pot Total</span>
        <span className={styles.total_value}>R$ 650,00</span>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.footer_label_value}>
          <span className={styles.footer_label}>Rebuys</span>
          <span className={styles.footer_value}>41</span>
        </div>
        <div className={styles.footer_label_value}>
          <span className={styles.footer_label}>Buyins</span>
          <span className={styles.footer_value}>9</span>
        </div>
        <div className={styles.footer_label_value}>
          <span className={styles.footer_label}>Add Ons</span>
          <span className={styles.footer_value}>5</span>
        </div>
      </div>
    </div>
  );
});
