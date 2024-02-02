import { api } from "api";
import type { AddPlayer } from "./types";

export class AddPlayerService {
  public async handle(id: number): AddPlayer.Result {
    try {
      const response: AddPlayer.Response = await api.post(`/add_jogador/${id}/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const addPlayerService = new AddPlayerService();
