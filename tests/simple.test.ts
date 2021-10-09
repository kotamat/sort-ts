import { simplesort } from "../src/simple";
import { sortTests } from "./testCases";

describe.each(sortTests)("simple", (data) => {
  it(`${data.data.join(",")}`, () => {
    expect(simplesort(data.data)).toStrictEqual(data.expect);
  });
});
