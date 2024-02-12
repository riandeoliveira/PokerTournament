import { constants } from "data";
import { makeAutoObservable } from "mobx";

export class TournamentStore {
  public addOns: number;
  public big: number;
  public breakTime: string;
  public buyins: number;
  public countdown: number;
  public currentPlayers: number;
  public nextBig: number;
  public nextSmall: number;
  public rebuys: number;
  public small: number;
  public stackMedium: number;
  public started: boolean;
  public startedAt: string;
  public totalChips: number;
  public totalPlayers: number;
  public totalPrize: number;

  public constructor() {
    this.addOns = 0;
    this.big = 0;
    this.breakTime = new Date().toString();
    this.buyins = 0;
    this.countdown = constants.COUNTDOWN;
    this.currentPlayers = 0;
    this.nextBig = 0;
    this.nextSmall = 0;
    this.rebuys = 0;
    this.small = 0;
    this.stackMedium = 0;
    this.started = false;
    this.startedAt = new Date().toString();
    this.totalChips = 0;
    this.totalPlayers = 0;
    this.totalPrize = 0;

    makeAutoObservable(this);
  }

  public decrementCountdown(): void {
    this.setCountdown(this.countdown - 1);
  }

  public setAddons(addOns: number): void {
    this.addOns = addOns;
  }

  public setBig(big: number): void {
    this.big = big;
  }

  public setBreakTime(breakTime: string): void {
    this.breakTime = breakTime;
  }

  public setBuyins(buyins: number): void {
    this.buyins = buyins;
  }

  public setCountdown(countdown: number): void {
    this.countdown = countdown;
  }

  public setCurrentPlayers(currentPlayers: number): void {
    this.currentPlayers = currentPlayers;
  }

  public setNextBig(nextBig: number): void {
    this.nextBig = nextBig;
  }

  public setNextSmall(nextSmall: number): void {
    this.nextSmall = nextSmall;
  }

  public setRebuys(rebuys: number): void {
    this.rebuys = rebuys;
  }

  public setSmall(small: number): void {
    this.small = small;
  }

  public setStackMedium(stackMedium: number): void {
    this.stackMedium = stackMedium;
  }

  public setStarted(started: boolean): void {
    this.started = started;
  }

  public setStartedAt(startedAt: string): void {
    this.startedAt = startedAt;
  }

  public setTotalChips(totalChips: number): void {
    this.totalChips = totalChips;
  }

  public setTotalPlayers(totalPlayers: number): void {
    this.totalPlayers = totalPlayers;
  }

  public setTotalprize(totalPrize: number): void {
    this.totalPrize = totalPrize;
  }
}

export const tournamentStore = new TournamentStore();
