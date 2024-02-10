import { TotalPrizeLabel } from "components/TotalPrizeLabel";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const TotalPrizeArea = observer((): ReactElement => {
  return (
    <div className={styles.total_prize_area_component}>
      <div className={styles.total_container}>
        <span className={styles.total_label}>Pot Total</span>
        <span className={styles.total_value}>
          {tournamentStore.totalPrize.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className={styles.footer_container}>
        <TotalPrizeLabel label="Buyins" value={tournamentStore.buyins} />
        <TotalPrizeLabel label="Rebuys" value={tournamentStore.rebuys} />
        <TotalPrizeLabel label="Add Ons" value={tournamentStore.addOns} />
      </div>
    </div>
  );
});
