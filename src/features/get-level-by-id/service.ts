import { api } from "api";
import type { GetLevelById } from "./types";

export class GetLevelByIdService {
  public async handle(id: number): GetLevelById.Result {
    try {
      const response: GetLevelById.Response = await api.get(`/level/${id}/`);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getLevelByIdService = new GetLevelByIdService();
