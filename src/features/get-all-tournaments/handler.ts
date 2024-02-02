import { getAllTournamentsService } from "./service";

export const handleGetAllTournaments = async (): Promise<void> => {
  await getAllTournamentsService.handle();
};
