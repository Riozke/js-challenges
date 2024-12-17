import { expect, describe, it } from "vitest";

import filtrarPares from "./index";

describe("filterEvenOccurrences", () => {
  it("should return only the elements that appear an even number of times", () => {
    expect(filterEvenOccurrences([1, 1, 2, 3, 4, 4, 5])).toEqual([1, 4]);
  });
});
