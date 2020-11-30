import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account when create an instance', () => {
    // given
    const account = 10;

    // when
    const counter =  new Counter(account);

    // then
    expect(counter.account).toBe(account);
  });

  it('should increase account by 1 when call increase', () => {
    // given
    const account = 0;
    const counter =  new Counter(account);

    // when
    counter.increase();

    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account by 1 when call decrease', () => {
    // given
    const account = 0;
    const counter =  new Counter(account);

    // when
    counter.decrease();

    // then
    expect(counter.account).toBe(account - 1);
  });

  it('should count be reset as 0 when click reset button', () => {

    // given
    const account = 5;
    const counter =  new Counter(account);

    // when
    counter.resetCount();

    // then
    expect(counter.account).toBe(0);
  });
});
