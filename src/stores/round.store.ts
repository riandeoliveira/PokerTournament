import { makeAutoObservable } from "mobx";

export class RoundStore {
  public afterInterval: number;
  public beforeInterval: number;
  public minutes: number;
  public seconds: number;

  public constructor() {
    this.afterInterval = 0;
    this.beforeInterval = 0;
    this.minutes = 0;
    this.seconds = 0;

    makeAutoObservable(this);
  }

  public setAfterInterval(afterInterval: number): void {
    this.afterInterval = afterInterval;
  }

  public setBeforeInterval(beforeInterval: number): void {
    this.beforeInterval = beforeInterval;
  }

  public setMinutes(minutes: number): void {
    this.minutes = minutes;
  }

  public setSeconds(seconds: number): void {
    this.seconds = seconds;
  }
}

export const roundStore = new RoundStore();
