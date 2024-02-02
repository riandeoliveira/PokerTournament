import { getTournamentByIdService } from "./service";

export const handleGetTournamentById = async (id: number): Promise<void> => {
  await getTournamentByIdService.handle(id);
};
