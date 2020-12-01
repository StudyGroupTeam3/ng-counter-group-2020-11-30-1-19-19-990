import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})

export class CounterGroupService {

  public counters: Array<Counter>;

  constructor(){
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  public size: number = 5;

  private generateCounters(): void {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }

  public setSize(size: number): void {
    this.size = size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  public sum(): number {
    return this.counters.reduce((res, element) =>  res + element.counter, 0);
  }

  public reset(): void {
    this.counters.forEach(counter => counter.reset());
  }
}
