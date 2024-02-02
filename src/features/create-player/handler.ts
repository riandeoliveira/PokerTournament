import { createPlayerService } from "./service";
import type { CreatePlayer } from "./types";

export const handleCreatePlayer = async (request: CreatePlayer.Request): Promise<void> => {
  await createPlayerService.handle(request);
};
