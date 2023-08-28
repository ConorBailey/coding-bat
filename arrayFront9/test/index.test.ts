import { assert } from "chai";
import { arrayfront9 } from "../src/index";

/* 
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.


arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
arrayFront9([1, 2, 3, 7, 9, 8, 9]) → false
arrayFront9([9, 2, 3, 4, 5]) → true
*/

describe("arrayFront9", () => {
  it("Should return true", () => {
    const result = arrayfront9([1, 2, 3, 9, 3, 4]);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = arrayfront9([1, 2, 3, 4, 9]);
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = arrayfront9([1, 2, 3, 4, 5]);
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = arrayfront9([1, 2, 3, 7, 9, 8, 9]);
    assert.equal(result, false);
  });

  it("Should return true", () => {
    const result = arrayfront9([9, 2, 3, 4, 5]);
    assert.equal(result, true);
  });
});
