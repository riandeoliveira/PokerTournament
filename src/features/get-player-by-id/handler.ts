import { getPlayerByIdService } from "./service";

export const handleGetPlayerById = async (id: number): Promise<void> => {
  await getPlayerByIdService.handle(id);
};
