import { getTotalPrizeService } from "./service";

export const handleGetTotalPrize = async (): Promise<void> => {
  await getTotalPrizeService.handle();
};
