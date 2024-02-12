import { tournamentStore } from "stores/tournament.store";
import { getLevelByIdService } from "./service";

export const handleGetLevelById = async (id: number): Promise<void> => {
  const data = await getLevelByIdService.handle(id);

  tournamentStore.setBig(data?.big ?? 0);
  tournamentStore.setSmall(data?.small ?? 0);
};
