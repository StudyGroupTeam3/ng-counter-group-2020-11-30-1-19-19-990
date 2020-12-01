import { CounterGroupService } from './counter-group';
import { TestBed } from '@angular/core/testing';

describe('CounterGroupService', () => {
  let service: CounterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterGroupService);
  });

  it('should create an instance', () => {
    expect(new CounterGroupService()).toBeTruthy();
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    service.counters.forEach(element => {
      element.counter = 1;
      expectedSum += element.counter;
    });

    // when
    const sum = service.sum();

    // then
    expect(sum).toBe(expectedSum);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should set size when create instance', () => {
    expect(service.size).toBe(5);
  });

  it('should change count of counters when reset size', () => {
    // When
    service.setSize(10);

    // Then
    expect(service.counters.length).toBe(10);
  });

  it('should set size when create instance', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should sum turn 0 when call reset method', () => {
    // given

    // when
    service.reset();
    const actualSum = service.sum();

    // then
    expect(actualSum).toBe(0);
  });
});
