import { updatePlayerByIdService } from "./service";
import type { UpdatePlayerById } from "./types";

export const handleUpdatePlayerById = async (
  id: number,
  request: UpdatePlayerById.Request,
): Promise<void> => {
  await updatePlayerByIdService.handle(id, request);
};
