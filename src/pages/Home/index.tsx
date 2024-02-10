import { AsideArea } from "components/AsideArea";
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
import { tournamentStore } from "stores/tournament.store";

export const Home = observer((): ReactElement => {
  const handleCountdown = (): void => {};

  const handleSynchronization = async (): Promise<void> => {
    await handleGetTournamentLevel(constants.TOURNAMENT_ID);
    await handleGetTournamentById(constants.TOURNAMENT_ID);
    await handleGetTotalPrize();
    await handleGetTournamentChips(constants.TOURNAMENT_ID);
    await handleGetLevelById(levelStore.currentLevel);
    await handleGetNextLevelById(levelStore.currentLevel);

    handleCountdown();
  };

  useEffect(() => {
    tournamentStore.countdown > 0 &&
      setInterval(() => {
        tournamentStore.setCountdown(tournamentStore.countdown - 1);
      }, 1000);
  }, [tournamentStore.countdown]);

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
          <PlayerLevelArea />
          <AsideArea />
          <MainArea />
          <TotalPrizeArea />
          <LogoArea />
        </>
      ) : (
        <StartArea />
      )}
    </>
  );
});
