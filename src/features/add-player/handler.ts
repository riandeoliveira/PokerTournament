import { addPlayerService } from "./service";

export const handleAddPlayer = async (id: number): Promise<void> => {
  await addPlayerService.handle(id);
};
