import { CounterGroupService } from './../service/counter-group.service';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {
  constructor(public service: CounterGroupService) {
  }

  public get counters(): Array<Counter> {
    return this.service.counters;
  }

  ngOnInit(): void {
  }

  public sum(): number {
    return this.service.sum();
  }

  public setSize(size: number): void {
    this.service.setSize(size);
  }
}

