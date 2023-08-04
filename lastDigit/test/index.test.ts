import { assert } from "chai";
import { lastDigit } from "../src/index";

/* 
Given two non-negative int values, 
return true if they have the same last digit, 
such as with 27 and 57. Note that the % "mod" operator computes remainders, 
so 17 % 10 is 7.

lastDigit(7, 17) -> true
lastDigit(6, 17) -> false
lastDigit(3, 113) -> true
lastDigit(8, 8) -> true
lastDigit(-1, 1) -> false
*/

describe("lastDigit", () => {
  it("Should return true", () => {
    const result = lastDigit(7, 17);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = lastDigit(6, 17);
    assert.equal(result, false);
  });

  it("Should return true", () => {
    const result = lastDigit(3, 113);
    assert.equal(result, true);
  });

  it("should return true", () => {
    const result = lastDigit(8, 8);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = lastDigit(-1, 1);
    assert.equal(result, false);
  });
});
