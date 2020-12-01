import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { CounterGroupService } from '../service/counter-group';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  public sizechange: number = 5;

  size: NzButtonSize = 'default';

  public counters = this.counterGroupService.counters;

  constructor(private counterGroupService: CounterGroupService) {
  }

  ngOnInit(): void {
  }

  public sum(): number {
    return this.counterGroupService.sum();
  }

  public setSize(): void {
    this.counterGroupService.setSize(this.sizechange);
    this.counters = this.counterGroupService.counters;
  }

  public reset(): void {
    this.counterGroupService.reset();
  }
}
