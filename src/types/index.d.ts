export interface ITimeStore {
  minutes: number;
  seconds: number;
  setMinutes(minutes: number): void;
  setSeconds(seconds: number): void;
}
