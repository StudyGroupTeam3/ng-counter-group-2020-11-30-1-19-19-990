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
});
