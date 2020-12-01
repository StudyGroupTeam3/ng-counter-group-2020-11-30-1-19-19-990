import { TestBed } from '@angular/core/testing';

import { CounterGroupService } from './counter-group.service';

describe('CounterGroupService', () => {
  let service: CounterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change count of counters when reset size', () => {
    // given


    // when
    service.setSize(10);

    // then
    expect(service.counters.length).toBe(10);
  });

  it('should set size when create instance', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    service.counters.forEach(item => {
      expectedSum += item.account;
    });

    // when
    const sum = service.sum();

    // then
    expect(sum).toBe(expectedSum);
  });

  it('should all count be reset as 0 and sum change when click reset button', () => {
    // given
    let value = 1;
    service.counters.forEach(item => {
      item.account = value;
      value++;
    });

    // when
    service.resetCounters();
    const sum = service.sum();

    // then
    expect(sum).toBe(0);
    service.counters.forEach(item => {
      expect(item.account).toBe(0);
    });
  });
});
