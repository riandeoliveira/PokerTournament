import { getTournamentChipsService } from "./service";

export const handleGetTournamentChips = async (id: number): Promise<void> => {
  await getTournamentChipsService.handle(id);
};
