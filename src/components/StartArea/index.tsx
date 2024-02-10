import { constants } from "data";
import { handleStartTournament } from "features/start-tournament/handler";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const StartArea = observer((): ReactElement => {
  const handleButtonClick = (): void => {
    handleStartTournament(constants.TOURNAMENT_ID);

    tournamentStore.setStarted(true);
  };

  return (
    <div className={styles.start_area_component}>
      <button type="button" className={styles.button} onClick={handleButtonClick}>
        Iniciar Torneio
      </button>
    </div>
  );
});
