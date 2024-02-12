import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { roundStore } from "stores/round.store";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const PlayerLevelArea = observer((): ReactElement => {
  return (
    <div className={styles.player_level_area_component}>
      <span className={styles.primary_label}>Nível {roundStore.counter}</span>
      <span className={styles.secondary_label}>Jogadores</span>
      <span className={styles.value}>
        {tournamentStore.currentPlayers} de {tournamentStore.totalPlayers}
      </span>
    </div>
  );
});
