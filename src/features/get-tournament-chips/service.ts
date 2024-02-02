import { api } from "api";
import type { GetTournamentChips } from "./types";

export class GetTournamentChipsService {
  public async handle(id: number): GetTournamentChips.Result {
    try {
      const response: GetTournamentChips.Response = await api.get(`torneio/${id}/chips/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getTournamentChipsService = new GetTournamentChipsService();
