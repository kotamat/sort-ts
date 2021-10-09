import { median3, quicksort } from "../src/quick";
import { sortTests } from "./testCases";

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

describe.each(sortTests)("sort", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(quicksort(data.data)).toStrictEqual(data.expect);
  });
});
