import { CounterGroupComponent } from './../counter-group/counter-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent, CounterGroupComponent ]
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

  it('should increase account by 1 when call increase', () => {
    // given
    component.counter.account = 0;

    // when
    component.counter.increase();

    // then
    expect(component.counter.account).toBe(1);
  });

  it('should decrease account by 1 when call decrease', () => {
    // given
    component.counter.account = 0;

    // when
    component.counter.decrease();

    // then
    expect(component.counter.account).toBe(-1);
  });

  it('should count be reset as 0 when click reset button', () => {
    // given
    component.counter.account = 5;

    // when
    component.reset();

    // then
    expect(component.account).toBe(0);
  });
});
