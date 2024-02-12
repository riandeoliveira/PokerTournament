import { Countdown } from "components/Countdown";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { roundStore } from "stores/round.store";
import { statusStore } from "stores/status.store";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const MainArea = observer((): ReactElement => {
  useEffect(() => {
    if (statusStore.hadBreak) {
      roundStore.setMinutes(roundStore.afterInterval);
      roundStore.setSeconds(0);
    } else {
      roundStore.setMinutes(roundStore.beforeInterval);
      roundStore.setSeconds(0);
    }
  }, [roundStore.afterInterval, roundStore.beforeInterval]);

  return (
    <div className={styles.main_area_component}>
      <span className={styles.name}>{tournamentStore.name}</span>
      <Countdown store={roundStore} />
      <span className={styles.current_value}>
        {tournamentStore.small} / {tournamentStore.big}
      </span>
      <span className={styles.next_value}>
        {tournamentStore.nextSmall} / {tournamentStore.nextBig}
      </span>
    </div>
  );
});
