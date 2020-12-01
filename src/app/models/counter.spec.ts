import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account to 10 when create an instance', () => {
    // given
    const counter = 10;

    // when
    const test = new Counter(counter);

    // then
    expect(test.counter).toBe(10);
  });

  it('should set account when create an instance', () => {
    expect(new Counter().counter).toBe(4);
  });

  it('should increase counter by 1 when call increase', () => {
    // given
    const counter = 0;
    const test = new Counter(counter);

    // when
    test.increase();

    // then
    expect(test.counter).toBe(counter + 1);
  });

  it('should decrease counter by 1 when call decrease', () => {
    // given
    const counter = 0;
    const test = new Counter(counter);

    // when
    test.decrease();

    // then
    expect(test.counter).toBe(counter - 1);
  });
});
