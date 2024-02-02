import { api } from "api";
import type { GetTournamentLevel } from "./types";

export class GetTournamentLevelService {
  public async handle(id: number): GetTournamentLevel.Result {
    try {
      const response: GetTournamentLevel.Response = await api.get(`torneio/${id}/nivel_atual/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getTournamentLevelService = new GetTournamentLevelService();
