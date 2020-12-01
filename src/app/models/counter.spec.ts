import { Counter } from './counter';

describe('Counter', () => {
  let account: number;
  let counter: Counter;
  beforeEach(() => {
    account = 0;
    counter = new Counter(account);
  });

  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account when create an instance', () => {
    // given

    // when

    // then
    expect(counter.account).toBe(account);
  });

  it('should increase account by 1 when call increase', () => {
    // given

    // when
    counter.increase();

    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account by 1 when call decrease', () => {
    // given

    // when
    counter.decrease();

    // then
    expect(counter.account).toBe(account - 1);
  });

  it('should count be reset as 0 when click reset button', () => {

    // given
    counter.account = 5;

    // when
    counter.resetCount();

    // then
    expect(counter.account).toBe(0);
  });
});
