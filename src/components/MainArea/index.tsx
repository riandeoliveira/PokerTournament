import { Countdown } from "components/Countdown";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { roundStore } from "stores/round.store";
import { statusStore } from "stores/status.store";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const MainArea = observer((): ReactElement => {
  console.log(roundStore.afterInterval);
  console.log(roundStore.beforeInterval);

  useEffect(() => {
    if (statusStore.hadBreak) roundStore.setMinutes(roundStore.afterInterval);
    else roundStore.setMinutes(roundStore.beforeInterval);
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
