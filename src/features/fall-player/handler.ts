import { fallPlayerService } from "./service";

export const handleFallPlayer = async (id: number): Promise<void> => {
  await fallPlayerService.handle(id);
};
