import { api } from "api";
import type { CreatePlayer } from "./types";

export class CreatePlayerService {
  public async handle(request: CreatePlayer.Request): CreatePlayer.Result {
    try {
      const response: CreatePlayer.Response = await api.post("/jogador/novo/", request);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const createPlayerService = new CreatePlayerService();
