import { tournamentStore } from "stores/tournament.store";
import { getTournamentChipsService } from "./service";

export const handleGetTournamentChips = async (id: number): Promise<void> => {
  const data = await getTournamentChipsService.handle(id);

  tournamentStore.setTotalChips(data?.total_fichas ?? 0);
  tournamentStore.setStackMedium(data?.stack_medio ?? 0);
};
