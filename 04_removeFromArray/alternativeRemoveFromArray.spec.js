const alternativeRemoveFromArray = require('./alternativeRemoveFromArray')

describe('alternativeRemoveFromArray', () => {
  test('removes a single value', () => {
    expect(alternativeRemoveFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('removes multiple values', () => {
    expect(alternativeRemoveFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  test('ignores non present values', () => {
    expect(alternativeRemoveFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  test('ignores non present values, but still works', () => {
    expect(alternativeRemoveFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  test('can remove all values', () => {
    expect(alternativeRemoveFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  test('works with strings', () => {
    expect(alternativeRemoveFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  test('only removes same type', () => {
    expect(alternativeRemoveFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
});
