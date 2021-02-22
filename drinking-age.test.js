// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { checkDrinkingAge } = require('./drinking-age');

test('should return false when age is 18', () => {
  expect(checkDrinkingAge(18)).toBe(false);
});

test('should return false when age is 19', () => {
  expect(checkDrinkingAge(19)).toBe(false);
});

test('should return false when age is 17', () => {
  expect(checkDrinkingAge(17)).toBe(false);
});

test('should return false when age is 0', () => {
  expect(checkDrinkingAge(0)).toBe(false);
});

test('should return true when age is 21', () => {
  expect(checkDrinkingAge(21)).toBe(true);
});

test('should return true when age is 22', () => {
  expect(checkDrinkingAge(22)).toBe(true);
});

test('should return true when age is 100', () => {
  expect(checkDrinkingAge(100)).toBe(true);
});

test('should return true when age is 50', () => {
  expect(checkDrinkingAge(50)).toBe(true);
});