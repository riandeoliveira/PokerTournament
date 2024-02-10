import { timeExtension } from "extensions/time-extension";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const MainArea = observer((): ReactElement => {
  return (
    <div className={styles.main_area_component}>
      <span className={styles.primary_value}>
        {timeExtension.toMinutesAndSeconds(tournamentStore.countdown)}
      </span>
      <span className={styles.secondary_value}>
        {tournamentStore.small} / {tournamentStore.big}
      </span>
      <span className={styles.tertiary_value}>
        {tournamentStore.nextSmall} / {tournamentStore.nextBig}
      </span>
    </div>
  );
});
