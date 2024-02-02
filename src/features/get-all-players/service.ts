import { api } from "api";
import type { GetAllPlayers } from "./types";

export class GetAllPlayersService {
  public async handle(): GetAllPlayers.Result {
    try {
      const response: GetAllPlayers.Response = await api.get("/jogadores/");

      return response.data.jogadores;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getAllPlayersService = new GetAllPlayersService();
