import { statusStore } from "stores/status.store";
import { activateIntervalService } from "./service";

export const handlerActivateInterval = async (id: number): Promise<void> => {
  await activateIntervalService.handle(id);

  statusStore.setHadBreak(true);
};
