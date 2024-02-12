import type { PlayFunction } from "use-sound/dist/types";

export class MainProvider {
  public playSound: PlayFunction;

  public constructor() {
    this.playSound = {} as PlayFunction;
  }

  public registerPlaySound(playSound: PlayFunction): void {
    this.playSound = playSound;
  }
}

export const mainProvider = new MainProvider();
