import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor() {
    this.counters = new Array<Counter>();
  }

  public size: number = 5;

  public counters: Array<Counter>;

  ngOnInit(): void {
    this.generateOunters();
  }

  generateOunters(): void {
    for (let index = 0; index < this.size; index++) {
      this.counters.push(new Counter());
    }
  }

  public sum(): number {
    return this.counters.reduce((result, counter) => {
      return counter.account + result;
    }, 0);
  }

  public setSize(size: number): void {
    this.size = size;
    this.counters = new Array<Counter>();
    this.generateOunters();
  }

}
