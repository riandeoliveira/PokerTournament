import { deletePlayerByIdService } from "./service";

export const handleDeletePlayerById = async (id: number): Promise<void> => {
  await deletePlayerByIdService.handle(id);
};
