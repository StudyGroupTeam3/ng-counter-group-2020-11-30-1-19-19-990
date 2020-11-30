import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    component.counters.forEach(counter => {
      counter.account = 1;
      expectedSum += counter.account;
    });
    // when
    const sum = component.sum();
    // then
    expect(sum).toBe(expectedSum);
  });

  it('should change count of counters when set size', () => {
    // given

    // when
    component.setSize('10');
    // then
    expect(component.counters.length).toBe(10);
  });

  it('should change sum of accounts of counters when reset any component', () => {
    // given
    component.counters.forEach(counter => {
      counter.account = 1;
    });
    // when
    component.counters[0].reset();
    let expectedSum = 0;
    component.counters.forEach(counter => {
      counter.account = 1;
      expectedSum += counter.account;
    });
    const sum = component.sum();
    // then
    expect(sum).toBe(expectedSum);
  });
});
