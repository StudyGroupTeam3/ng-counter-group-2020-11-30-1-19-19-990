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

  it('should set size when create instatnce', () => {
    expect(component.size).toBe(5);
  });

  it('should countain counters when create instatnce', () => {
    expect(component.counters.length).toBe(component.size);
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
    component.setSize(10);
    // then
    expect(component.counters.length).toBe(10);
  });
});
