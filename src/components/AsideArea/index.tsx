import { AsideLabel } from "components/AsideLabel";
import { format, intervalToDuration } from "date-fns";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const AsideArea = observer((): ReactElement => {
  const { hours, minutes, seconds } = intervalToDuration({
    start: tournamentStore.breakTime,
    end: tournamentStore.startedAt,
  });

  const date = new Date(0, 0, 0, hours ?? 0, minutes ?? 0, seconds ?? 0);
  const formattedTime = format(date, "HH:mm:ss");

  return (
    <div className={styles.aside_area_component}>
      <AsideLabel label="Intervalo em" value={formattedTime} />
      <AsideLabel label="ChipCount" value={tournamentStore.totalChips.toLocaleString()} />
      <AsideLabel
        label="Stack Médio"
        value={parseInt(tournamentStore.stackMedium.toFixed()).toLocaleString()}
      />
    </div>
  );
});
