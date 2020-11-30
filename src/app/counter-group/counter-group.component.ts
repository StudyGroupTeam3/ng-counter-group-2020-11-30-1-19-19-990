import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor() { }

  public size: number = 5;

  ngOnInit(): void {
  }

}
