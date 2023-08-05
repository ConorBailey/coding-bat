import { assert } from "chai";
import { makes10 } from "../src/index";

/* 
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
makes10(5, 5) → true
makes10(-2, 12) → true
*/

describe("makes10", () => {
  it("Should return true", () => {
    const result = makes10(9, 10);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = makes10(9, 9);
    assert.equal(result, false);
  });

  it("Should return true", () => {
    const result = makes10(1, 9);
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = makes10(5, 5);
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = makes10(-2, 12);
    assert.equal(result, true);
  });
});
