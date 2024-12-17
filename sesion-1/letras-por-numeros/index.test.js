import { expect, describe, it } from "vitest";

import replaceLettersWithAlphabetIndex from "./index";

describe("replaceLettersWithAlphabetIndex", () => {
  it("debería devolver la representanción en números", () => {
    expect(replaceLettersWithAlphabetIndex("abc")).toEqual("1 2 3");
  });

  it("debería omitir espacios", () => {
    expect(replaceLettersWithAlphabetIndex("abc def")).toEqual("1 2 3 4 5 6");
  });

  it("debería omitir mayúsculas", () => {
    expect(replaceLettersWithAlphabetIndex("aBc def")).toEqual("1 2 3 4 5 6");
  });
});
