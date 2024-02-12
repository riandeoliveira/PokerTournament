import { AsideArea } from "components/AsideArea";
import { IntervalArea } from "components/IntervalArea";
import { LogoArea } from "components/LogoArea";
import { MainArea } from "components/MainArea";
import { PlayerLevelArea } from "components/PlayerLevelArea";
import { StartArea } from "components/StartArea";
import { TotalPrizeArea } from "components/TotalPrizeArea";
import { constants } from "data";
import { handleGetLevelById } from "features/get-level-by-id/handler";
import { handleGetNextLevelById } from "features/get-next-level-by-id/handler";
import { handleGetTotalPrize } from "features/get-total-prize/handler";
import { handleGetTournamentById } from "features/get-tournament-by-id/handler";
import { handleGetTournamentChips } from "features/get-tournament-chips/handler";
import { handleGetTournamentLevel } from "features/get-tournament-level/handler";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { levelStore } from "stores/level.store";
import { roundStore } from "stores/round.store";
import { statusStore } from "stores/status.store";
import { tournamentStore } from "stores/tournament.store";

export const Home = observer((): ReactElement => {
  const handleSynchronization = async (): Promise<void> => {
    if (tournamentStore.started && !statusStore.isOnBreak) {
      await Promise.all([
        handleGetTournamentLevel(constants.TOURNAMENT_ID),
        handleGetTournamentById(constants.TOURNAMENT_ID),
        handleGetTotalPrize(),
        handleGetTournamentChips(constants.TOURNAMENT_ID),
        handleGetLevelById(roundStore.counter),
        handleGetNextLevelById(levelStore.currentLevel),
      ]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSynchronization();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {tournamentStore.started ? (
        <>
          {statusStore.isOnBreak ? (
            <IntervalArea />
          ) : (
            <>
              <PlayerLevelArea />
              <AsideArea />
              <MainArea />
              <TotalPrizeArea />
              <LogoArea />
            </>
          )}
        </>
      ) : (
        <StartArea />
      )}
    </>
  );
});
