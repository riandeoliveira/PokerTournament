import { startTournamentService } from "./service";

export const handleStartTournament = async (id: number): Promise<void> => {
  await startTournamentService.handle(id);
};
