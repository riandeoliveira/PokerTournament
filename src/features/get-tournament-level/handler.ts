import { getTournamentLevelService } from "./service";

export const handleGetTournamentLevel = async (id: number): Promise<void> => {
  await getTournamentLevelService.handle(id);
};
