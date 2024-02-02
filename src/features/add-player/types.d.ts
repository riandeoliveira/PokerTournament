import type { AxiosResponse } from "axios";

export namespace AddPlayer {
  export interface ApiResponse {
    addon_valor: number;
    buyin_valor: number;
    horario_intervalo: string;
    id: number;
    jogadores_atual: number;
    jogadores_total: number;
    nome_torneio: string;
    rebuy_valor: number;
  }

  export type Result = Promise<ApiResponse | null>;

  export interface Response extends AxiosResponse<ApiResponse> {}
}
