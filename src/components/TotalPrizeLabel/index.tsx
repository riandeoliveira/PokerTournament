import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface TotalPrizeLabelProps {
  label: string;
  value: number;
}

export const TotalPrizeLabel = observer(({ label, value }: TotalPrizeLabelProps): ReactElement => {
  return (
    <div className={styles.total_prize_label_component}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
});
