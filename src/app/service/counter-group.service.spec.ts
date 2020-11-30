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
});
