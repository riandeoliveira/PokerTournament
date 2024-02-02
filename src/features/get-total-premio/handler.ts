import { getTotalPremioService } from "./service";

export const handleGetTotalPremio = async (): Promise<void> => {
  await getTotalPremioService.handle();
};
