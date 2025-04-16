import { div, square, sum } from '../src';

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('square of 2', () => {
  expect(square(2)).toBe(4);
  expect(square(-1)).toBe(1);
});

test('5 div 2', () => {
  expect(div(5, 2)).toBe(2.5);
});
