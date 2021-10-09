import { median3, quicksort } from "../src/quick";

const median3_tests: { data: [number, number, number]; expect: number }[] = [
  {
    data: [1, 2, 3],
    expect: 2,
  },
  {
    data: [100, 3, 50],
    expect: 50,
  },
];

describe.each(median3_tests)("median3", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(median3(...data.data)).toBe(data.expect);
  });
});

const sort_tests = [
  {
    data: [5, 2, 4, 5, 6],
    expect: [2, 4, 5, 5, 6],
  },
  {
    data: [8, 4, 3, 7, 6, 5, 2, 1],
    expect: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

describe.each(sort_tests)("sort", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(quicksort(data.data)).toStrictEqual(data.expect);
  });
});
