export class Counter {
  public account: number;

  constructor(account: number = 0) {
    this.account = account;
  }

  public increase(): void {
    this.account ++;
  }

  public decrease(): void {
    this.account--;
  }
}
