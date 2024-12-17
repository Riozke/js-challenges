import { expect, describe, it } from "vitest";

import isIsogram from ".";

describe("isIsogram", () => {
  it("should return true if it is an isogram", () => {
    expect(isIsogram("gato")).toBe(true);
  });

  it("should ignore accents", () => {
    expect(isIsogram("Murciélago")).toBe(true);
  });

  it("should ignore uppercase letters", () => {
    expect(isIsogram("Casa")).toBe(false);
    expect(isIsogram("PeRrO")).toBe(false);
    expect(isIsogram("GaTo")).toBe(true);
  });
});
