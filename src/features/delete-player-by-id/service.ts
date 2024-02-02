import { api } from "api";
import type { DeletePlayerById } from "./types";

export class DeletePlayerByIdService {
  public async handle(id: number): DeletePlayerById.Result {
    try {
      await api.delete(`/jogador/${id}/excluir/`);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const deletePlayerByIdService = new DeletePlayerByIdService();
