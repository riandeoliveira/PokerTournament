import { api } from "api";
import type { GetTotalPremio } from "./types";

export class GetTotalPremioService {
  public async handle(): GetTotalPremio.Result {
    try {
      const response: GetTotalPremio.Response = await api.get("/torneios/");

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getTotalPremioService = new GetTotalPremioService();
