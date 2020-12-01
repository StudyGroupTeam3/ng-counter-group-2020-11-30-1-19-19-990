import { Counter } from './../models/counter';
import { Component, OnInit, Input } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  constructor() {
    // this.counter = new Counter();
   }

   @Input()
  public counter!: Counter;

  size: NzButtonSize = 'small';

  public get account(): number {
    return this.counter.counter;
  }

  ngOnInit(): void {
  }

  public increase(): void {
    this.counter.increase();
  }

  public decrease(): void {
    this.counter.decrease();
  }

  public reset(): void {
    this.counter.reset();
  }
}
