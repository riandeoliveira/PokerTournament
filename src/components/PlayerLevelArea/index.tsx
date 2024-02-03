import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const PlayerLevelArea = observer((): ReactElement => {
  return (
    <div className={styles.player_level_area_component}>
      <span className={styles.top_label}>Nível 3</span>
      <span className={styles.bottom_label}>Jogadores</span>
      <span className={styles.value}>31 de 60</span>
    </div>
  );
});
