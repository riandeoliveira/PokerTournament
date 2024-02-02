import { api } from "api";
import type { GetTournamentById } from "./types";

export class GetTournamentByIdService {
  public async handle(id: number): GetTournamentById.Result {
    try {
      const response: GetTournamentById.Response = await api.get(`/torneio/${id}/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getTournamentByIdService = new GetTournamentByIdService();
