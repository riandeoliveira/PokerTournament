import { makeAutoObservable } from "mobx";

export class RoundStore {
  public afterInterval: number;
  public beforeInterval: number;
  public counter: number;
  public minutes: number;
  public seconds: number;

  public constructor() {
    this.afterInterval = 0;
    this.beforeInterval = 0;
    this.counter = 1;
    this.minutes = 10;
    this.seconds = 10;

    makeAutoObservable(this);
  }

  public isFinished(): boolean {
    return this.minutes <= 0 && this.seconds <= 0;
  }

  public setAfterInterval(afterInterval: number): void {
    this.afterInterval = afterInterval;
  }

  public setBeforeInterval(beforeInterval: number): void {
    this.beforeInterval = beforeInterval;
  }

  public setCounter(counter: number): void {
    this.counter = counter;
  }

  public setMinutes(minutes: number): void {
    this.minutes = minutes;
  }

  public setSeconds(seconds: number): void {
    this.seconds = seconds;
  }
}

export const roundStore = new RoundStore();
