import { Countdown } from "components/Countdown";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { roundStore } from "stores/round.store";
import { statusStore } from "stores/status.store";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const MainArea = observer((): ReactElement => {
  useEffect(() => {
    if (roundStore.minutes <= 0 && roundStore.seconds <= 0) {
      roundStore.setMinutes(roundStore.afterInterval);
      roundStore.setSeconds(0);

      roundStore.setCounter(roundStore.counter + 1);
    }
  }, [roundStore.minutes, roundStore.seconds]);

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
      <button
        type="button"
        style={{ backgroundColor: "#030303", cursor: "pointer" }}
        onClick={() => roundStore.setCounter(1)}
      >
        voltar 1
      </button>
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
