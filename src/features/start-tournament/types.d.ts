import type { AxiosResponse } from "axios";

export namespace StartTournament {
  export interface ApiResponse {
    message: string;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
