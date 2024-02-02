import { getLevelByIdService } from "./service";

export const handleGetLevelById = async (id: number): Promise<void> => {
  await getLevelByIdService.handle(id);
};
