import { statusStore } from "stores/status.store";
import { activateIntervalService } from "./service";

export const handleActivateInterval = async (id: number): Promise<void> => {
  await activateIntervalService.handle(id);

  statusStore.setIsOnBreak(true);
  statusStore.setHadBreak(true);
};
