import { api } from "api";
import type { GetPlayerById } from "./types";

export class GetPlayerByIdService {
  public async handle(id: number): GetPlayerById.Result {
    try {
      const response: GetPlayerById.Response = await api.get(`/jogador/${id}/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getPlayerByIdService = new GetPlayerByIdService();
