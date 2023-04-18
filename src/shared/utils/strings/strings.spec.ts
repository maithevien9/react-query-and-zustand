import { upperFirstChar } from "shared/utils/strings";

describe("upperFirstChar function", () => {
  it("should capitalize the first character of a given string", () => {
    const originalString = "hello world";
    const expectedString = "Hello World";
    const result = upperFirstChar(originalString);
    expect(result).toEqual(expectedString);
  });

  it("should return an empty string when given an empty string", () => {
    const originalString = "";
    const expectedString = "";
    const result = upperFirstChar(originalString);
    expect(result).toEqual(expectedString);
  });

  it("should return a string with only the first character capitalized when given a single-letter string", () => {
    const originalString = "a";
    const expectedString = "A";
    const result = upperFirstChar(originalString);
    expect(result).toEqual(expectedString);
  });

  it("should not change a string that already has its first character capitalized", () => {
    const originalString = "Hello World";
    const expectedString = "Hello World";
    const result = upperFirstChar(originalString);
    expect(result).toEqual(expectedString);
  });
});
