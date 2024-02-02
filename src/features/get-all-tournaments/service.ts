import { api } from "api";
import type { GetAllTournaments } from "./types";

export class GetAllTournamentsService {
  public async handle(): GetAllTournaments.Result {
    try {
      const response: GetAllTournaments.Response = await api.get("/torneios/");

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getAllTournamentsService = new GetAllTournamentsService();
