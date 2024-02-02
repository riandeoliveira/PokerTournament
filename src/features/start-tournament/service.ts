import { api } from "api";
import type { StartTournament } from "./types";

export class StartTournamentService {
  public async handle(id: number): StartTournament.Result {
    try {
      const response: StartTournament.Response = await api.post(`/comecar_torneio/${id}`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const startTournamentService = new StartTournamentService();
