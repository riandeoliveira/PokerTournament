import { api } from "api";
import type { GetTotalPrize } from "./types";

export class GetTotalPrizeService {
  public async handle(): GetTotalPrize.Result {
    try {
      const response: GetTotalPrize.Response = await api.get("/total_premio/");

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getTotalPrizeService = new GetTotalPrizeService();
