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

  it('should set size when create instatnce', () => {
    expect(service.size).toBe(5);
  });

  it('should countain counters when create instatnce', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    service.counters.forEach(counter => {
      counter.account = 1;
      expectedSum += counter.account;
    });
    // when
    const sum = service.sum();
    // then
    expect(sum).toBe(expectedSum);
  });

  it('should change count of counters when set size', () => {
    // given

    // when
    service.setSize('10');
    // then
    expect(service.counters.length).toBe(10);
  });

  it('should change sum of accounts of counters when reset any component', () => {
    // given
    service.counters.forEach(counter => {
      counter.account = 1;
    });
    // when
    service.counters[0].reset();
    let expectedSum = 0;
    service.counters.forEach(counter => {
      counter.account = 1;
      expectedSum += counter.account;
    });
    const sum = service.sum();
    // then
    expect(sum).toBe(expectedSum);
  });

  it('should clear all counter in counters when call reset', () => {
    // given

    // when
    service.reset();
    // then
    expect(service.counters.length).toBe(0);
  });

  it('should change sum to 0 when call reset', () => {
    // given

    // when
    service.reset();
    const sum = service.sum();
    // then
    expect(sum).toBe(0);
  });
});
