import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';
import { CounterGroupService } from '../service/counter-group.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor(private counterGroupService: CounterGroupService) { }

  public get counters(): Array<Counter> {
    return this.counterGroupService.counters;
  }

  ngOnInit(): void { }

  public sum(): number {
    return this.counterGroupService.sum();
  }

  public setSize(size: string): void {
    this.counterGroupService.setSize(size);
  }

}
