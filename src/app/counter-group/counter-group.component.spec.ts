import { CounterComponent } from './../counter/counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterGroupComponent,
        CounterComponent]
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

  it('should change count of counters when reset size', () => {
    // given


    // when
    component.service.setSize(10);

    // then
    expect(component.service.counters.length).toBe(10);
  });

  it('should set size when create instance', () => {
    expect(component.service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(component.service.counters.length).toBe(component.service.size);
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    component.service.counters.forEach(item => {
      expectedSum += item.account;
    });

    // when
    const sum = component.service.sum();

    // then
    expect(sum).toBe(expectedSum);
  });

  it('should all count be reset as 0 and sum change when click reset button', () => {
    // given
    let value = 1;
    component.service.counters.forEach(item => {
      item.account = value;
      value++;
    });

    // when
    component.service.resetCounters();
    const sum = component.service.sum();

    // then
    expect(sum).toBe(0);
    component.service.counters.forEach(item => {
      expect(item.account).toBe(0);
    });
  });
});
