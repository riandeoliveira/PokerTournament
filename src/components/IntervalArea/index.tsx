import { Countdown } from "components/Countdown";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { intervalStore } from "stores/interval.store";
import { statusStore } from "stores/status.store";
import styles from "./styles.module.scss";

export const IntervalArea = observer((): ReactElement => {
  useEffect(() => {
    if (intervalStore.isFinished()) statusStore.setIsOnBreak(false);
  }, [intervalStore.minutes, intervalStore.seconds]);

  return (
    <div className={styles.interval_area_component}>
      <span className={styles.label}>Intervalo</span>
      <Countdown store={intervalStore} />
    </div>
  );
});
