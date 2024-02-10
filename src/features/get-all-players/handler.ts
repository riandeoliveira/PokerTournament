import { playerStore } from "stores/player.store";
import { getAllPlayersService } from "./service";

export const handleGetAllPlayers = async (): Promise<void> => {
  const playerList = await getAllPlayersService.handle();

  if (playerList) playerStore.setList(playerList);
};
