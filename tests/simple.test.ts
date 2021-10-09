import { simplesort } from "../src/simple";

const simple_tests = [
  {
    data: [5, 3, 2, 4, 5, 6],
    expect: [2, 3, 4, 5, 5, 6],
  },
  {
    data: [8, 4, 3, 7, 6, 5, 2, 1],
    expect: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

describe.each(simple_tests)("simple", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(simplesort(data.data)).toStrictEqual(data.expect);
  });
});
