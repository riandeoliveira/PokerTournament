import type { AxiosResponse } from "axios";

export namespace GetAllPlayers {
  export interface ApiResponse {
    add_ons: number;
    buy_in: number;
    id: number;
    nome: string;
    rebuys: number;
  }

  export type Result = Promise<ApiResponse[] | null>;

  export interface Response
    extends AxiosResponse<{
      jogadores: ApiResponse[];
    }> {}
}
