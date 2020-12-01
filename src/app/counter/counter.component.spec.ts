import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.counter = new Counter();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter.account when call increase', () => {
    // given
    component.counter.counter = 0;

    // when
    component.increase();

    // then
    expect(component.account).toBe(1);
  });

  it('should decrease account when call decrease', () => {
    // given
    component.counter.counter = 0;

    // when
    component.decrease();

    // then
    expect(component.account).toBe(-1);
  });

  it('should counter turn 0 when click reset button', () => {
    // given
    component.counter.counter = 10;

    // when
    component.reset();

    // then
    expect(component.account).toBe(0);
  });
});
