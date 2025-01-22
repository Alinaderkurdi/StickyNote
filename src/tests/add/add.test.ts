import {add } from './add'

describe('add function', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5); // 2 + 3 = 5
  });

  it('should return 0 when both numbers are 0', () => {
    expect(add(0, 0)).toBe(0); // 0 + 0 = 0
  });

  it('should correctly handle negative numbers', () => {
    expect(add(-2, 3)).toBe(1); // -2 + 3 = 1
  });
});