import { tournamentStore } from "stores/tournament.store";
import { getLevelByIdService } from "../get-level-by-id/service";

export const handleGetNextLevelById = async (id: number): Promise<void> => {
  const data = await getLevelByIdService.handle(id + 1);

  tournamentStore.setNextBig(data?.big ?? 0);
  tournamentStore.setNextSmall(data?.small ?? 0);
};
