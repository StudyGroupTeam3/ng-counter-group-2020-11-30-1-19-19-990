import { Counter } from './../models/counter';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.counters = Array<Counter>();
    this.generateCounters();
  }

  public size: number = 5;

  public counters: Array<Counter>;

  public generateCounters(): void {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }

  public sum(): number {
    return this.counters.reduce((result, item) => {
      return result + item.account;
    }, 0);
  }

  public setSize(size: number): void {
    this.size = size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }
}
