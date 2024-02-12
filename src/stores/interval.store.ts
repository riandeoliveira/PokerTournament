import { makeAutoObservable } from "mobx";

export class IntervalStore {
  public minutes: number;
  public seconds: number;

  public constructor() {
    this.minutes = 0;
    this.seconds = 0;

    makeAutoObservable(this);
  }

  public isFinished(): boolean {
    return this.minutes <= 0 && this.seconds <= 0;
  }

  public setMinutes(value: number): void {
    this.minutes = value;
  }

  public setSeconds(value: number): void {
    this.seconds = value;
  }
}

export const intervalStore = new IntervalStore();
