import type { AxiosResponse } from "axios";

export namespace UpdatePlayerById {
  export interface ApiRequest {
    add_ons: number;
    buy_in: number;
    nome: string;
    rebuys: number;
  }

  export interface ApiResponse {
    add_ons: number;
    buy_in: number;
    id: number;
    nome: string;
    rebuys: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Request extends ApiRequest {}

  export interface Response extends AxiosResponse<ApiResponse> {}
}
