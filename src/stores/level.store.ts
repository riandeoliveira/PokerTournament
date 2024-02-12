import { makeAutoObservable } from "mobx";

export class LevelStore {
  public currentLevel: number;

  public constructor() {
    this.currentLevel = 1;

    makeAutoObservable(this);
  }

  public setCurrentLevel(currentLevel: number): void {
    this.currentLevel = currentLevel;
  }
}

export const levelStore = new LevelStore();
