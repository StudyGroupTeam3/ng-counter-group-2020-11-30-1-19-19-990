import { Injectable, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {
  constructor() {
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  public size: number = 5;

  public counters: Array<Counter>;

  generateCounters(): void {
    for (let index = 0; index < this.size; index++) {
      this.counters.push(new Counter());
    }
  }

  public sum(): number {
    return this.counters.reduce((result, counter) => {
      return counter.account + result;
    }, 0);
  }

  public setSize(size: string): void {
    this.size = +size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  public reset(): void {
    this.counters = new Array<Counter>();
  }

}
