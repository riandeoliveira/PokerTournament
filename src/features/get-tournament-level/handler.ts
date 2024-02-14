import { levelStore } from "stores/level.store";
import { getTournamentLevelService } from "./service";

export const handleGetTournamentLevel = async (id: number): Promise<void> => {
  const data = await getTournamentLevelService.handle(id);

  // levelStore.setCurrentLevel(data?.numero_nivel ?? 0);
};
