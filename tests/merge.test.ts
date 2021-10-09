import { merge, mergesort } from "../src/merge";
import { sortTests } from "./testCases";

const merge_tests = [
  {
    arr1: [1, 3, 5, 6, 7],
    arr2: [1, 2, 3, 4, 5],
    expect: [1, 1, 2, 3, 3, 4, 5, 5, 6, 7],
  },
  {
    arr1: [],
    arr2: [1, 2, 3, 4, 5],
    expect: [1, 2, 3, 4, 5],
  },
  {
    arr1: [1, 2, 3, 4, 5],
    arr2: [],
    expect: [1, 2, 3, 4, 5],
  },
  {
    arr1: [1],
    arr2: [1, 2, 3, 4, 5],
    expect: [1, 1, 2, 3, 4, 5],
  },
  {
    arr1: [1],
    arr2: [1],
    expect: [1, 1],
  },
];

describe.each(merge_tests)("merge", (data) => {
  it(`arr1: ${data.arr1.join(",")}, arr2: ${data.arr2.join(",")}`, () => {
    expect(merge(data.arr1, data.arr2)).toStrictEqual(data.expect);
  });
});

describe.each(sortTests)("mergesort", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(mergesort(data.data)).toStrictEqual(data.expect);
  });
});
