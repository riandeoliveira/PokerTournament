import type { AxiosResponse } from "axios";

export namespace GetLevelById {
  export interface ApiResponse {
    big: number;
    id: number;
    nivel: number;
    small: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
