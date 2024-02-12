import { makeAutoObservable } from "mobx";

export class StatusStore {
  public hadBreak: boolean;
  public isOnBreak: boolean;

  public constructor() {
    this.hadBreak = false;
    this.isOnBreak = false;

    makeAutoObservable(this);
  }

  public setHadBreak(hadBreak: boolean): void {
    this.hadBreak = hadBreak;
  }

  public setIsOnBreak(isOnBreak: boolean): void {
    this.isOnBreak = isOnBreak;
  }
}

export const statusStore = new StatusStore();
