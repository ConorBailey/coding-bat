import { assert } from "chai";
import { firstLast6 } from "../src/index";

/* 

Given an array of ints,
return true if 6 appears as either the first or last element in the array.
The array will be length 1 or more.


firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false

*/

describe("firstLast6", () => {
  it("should return true if 6 appears in the array in the first or last position", () => {
    const result = firstLast6([1, 2, 6]);
    assert.equal(result, true);
  });

  it("should return true if 6 appears in the array in the first or last position", () => {
    const result = firstLast6([6, 1, 2, 3]);
    assert.equal(result, true);
  });

  it("should return false if 6 doesnt appear in first or last position of the array", () => {
    const result = firstLast6([12, 6, 1, 2, 3]);
    assert.equal(result, false);
  });
});
