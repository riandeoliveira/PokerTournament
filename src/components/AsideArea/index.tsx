import { AsideLabel } from "components/AsideLabel";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const AsideArea = observer((): ReactElement => {
  return (
    <div className={styles.aside_area_component}>
      <AsideLabel
        label="Intervalo em"
        value={format(new Date(tournamentStore.breakTime), "HH:mm:ss")}
      />
      <AsideLabel label="ChipCount" value={tournamentStore.totalChips.toLocaleString()} />
      <AsideLabel
        label="Stack Médio"
        value={parseInt(tournamentStore.stackMedium.toFixed()).toLocaleString()}
      />
    </div>
  );
});
