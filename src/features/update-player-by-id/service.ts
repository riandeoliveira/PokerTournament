import { api } from "api";
import type { UpdatePlayerById } from "./types";

export class UpdatePlayerByIdService {
  public async handle(id: number, request: UpdatePlayerById.Request): UpdatePlayerById.Result {
    try {
      const response: UpdatePlayerById.Response = await api.put(`/jogador/${id}/editar`, request);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const updatePlayerByIdService = new UpdatePlayerByIdService();
