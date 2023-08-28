import { assert } from "chai";
import { array123 } from "../src/index";

/* 
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
array123([1, 1, 1, 2, 3]) → true
array123([1, 2, 1, 2, 12, 3]) → false
*/

describe("array123", () => {
  it("Should return true", () => {
    const result = array123([1, 1, 2, 3, 1]);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = array123([1, 1, 2, 4, 1]);
    assert.equal(result, false);
  });

  it("Should return true", () => {
    const result = array123([1, 1, 2, 1, 2, 3]);
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = array123([1, 1, 1, 2, 3]);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = array123([1, 2, 1, 2, 12, 3]);
    assert.equal(result, false);
  });
});
