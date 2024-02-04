import { TotalPrizeLabel } from "components/TotalPrizeLabel";
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
        <TotalPrizeLabel label="Rebuys" value={41} />
        <TotalPrizeLabel label="Buyins" value={9} />
        <TotalPrizeLabel label="Add Ons" value={5} />
      </div>
    </div>
  );
});
