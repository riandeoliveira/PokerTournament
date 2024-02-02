import type { AxiosResponse } from "axios";

export namespace GetTournamentLevel {
  export interface ApiResponse {
    nivel_atual: string;
    numero_nivel: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
