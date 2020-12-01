export class Counter {
  public counter: number;

  constructor(counter: number = 4) {
    this.counter = counter;
  }

  public increase(): void {
    this.counter++;
  }

  public decrease(): void {
    this.counter--;
  }

  public reset(): void {
    this.counter = 0;
  }
}
