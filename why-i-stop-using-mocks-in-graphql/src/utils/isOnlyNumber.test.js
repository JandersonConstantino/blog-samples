import { isOnlyNumber } from "./isOnlyNumber";

describe("isOnlyNumber", () => {
  it("123141341 must be true", () => {
    // Arrange
    const value = "123141341";
    const expectedValue = true;

    // Act
    const result = isOnlyNumber(value);

    // Assert
    expect(result).toEqual(expectedValue);
  });

  it("abcd1234 must be false", () => {
    // Arrange
    const value = "abcd1234";
    const expectedValue = false;

    // Act
    const result = isOnlyNumber(value);

    // Assert
    expect(result).toEqual(expectedValue);
  });
});
