import { api } from "api";
import type { FallPlayer } from "./types";

export class FallPlayerService {
  public async handle(id: number): FallPlayer.Result {
    try {
      const response: FallPlayer.Response = await api.post(`/cair_jogador/${id}/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const fallPlayerService = new FallPlayerService();
