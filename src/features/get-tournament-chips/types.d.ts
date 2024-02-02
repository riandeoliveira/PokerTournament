import type { AxiosResponse } from "axios";

export namespace GetTournamentChips {
  export interface ApiResponse {
    stack_medio: number;
    total_fichas: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
