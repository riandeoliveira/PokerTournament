import { tournamentStore } from "stores/tournament.store";
import { getTotalPrizeService } from "./service";

export const handleGetTotalPrize = async (): Promise<void> => {
  const data = await getTotalPrizeService.handle();

  tournamentStore.setRebuys(data?.qtd_rebuys ?? 0);
  tournamentStore.setBuyins(data?.qtd_buyins ?? 0);
  tournamentStore.setAddons(data?.qtd_addons ?? 0);
  tournamentStore.setTotalprize(data?.valor_total ?? 0);
};
