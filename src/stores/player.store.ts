import type { GetAllPlayers } from "features/get-all-players/types";
import { makeAutoObservable } from "mobx";

type PlayerList = GetAllPlayers.ApiResponse[];

export class PlayerStore {
  public list: PlayerList;

  public constructor() {
    this.list = [];

    makeAutoObservable(this);
  }

  public setList(list: PlayerList): void {
    this.list = list;
  }
}

export const playerStore = new PlayerStore();
