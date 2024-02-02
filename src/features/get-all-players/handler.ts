import { getAllPlayersService } from "./service";

export const handleGetAllPlayers = async (): Promise<void> => {
  await getAllPlayersService.handle();
};
