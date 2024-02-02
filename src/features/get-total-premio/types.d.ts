import type { AxiosResponse } from "axios";

export namespace GetTotalPremio {
  export interface ApiResponse {
    qtd_addons: number;
    qtd_buyins: number;
    qtd_rebuys: number;
    valor_total: number;
    vlr_addons: number;
    vlr_buyins: number;
    vlr_rebuys: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
