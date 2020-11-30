import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set acount when create an instance', () => {
    // given
    const account = 10;

    // when
    const counter = new Counter(account);

    // then
    expect(counter.account).toBe(10);
  });

  it('should increase acount by 1 when call increase()', () => {
    // given
    const account = 0;

    // when
    const counter = new Counter(account);
    counter.increase();

    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should decrease acount by 1 when call decrease()', () => {
    // given
    const account = 0;

    // when
    const counter = new Counter(account);
    counter.decrease();

    // then
    expect(counter.account).toBe(account - 1);
  });
});
