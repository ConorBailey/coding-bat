import { assert } from "chai";
import { arrayCount9 } from "../src";

/* 


Given an array of ints, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
arrayCount9([1, 9, 9, 9, 9]) → 4
arrayCount9([1, 7, 8, 10, 0]) → 0

*/

describe("arrayCount9", () => {
  it("Should return 1 as 9 appears once in the array", () => {
    const result = arrayCount9([1, 2, 9]);
    assert.equal(result, 1);
  });

  it("Should return 2 as 9 appears twice in the array", () => {
    const result = arrayCount9([1, 9, 9]);
    assert.equal(result, 2);
  });

  it("Should return 3 as 9 appears thrice in the array", () => {
    const result = arrayCount9([1, 9, 9, 3, 9]);
    assert.equal(result, 3);
  });

  it("Should return 4 as 9 appears four times in the array", () => {
    const result = arrayCount9([1, 9, 9, 9, 9]);
    assert.equal(result, 4);
  });

  it("Should return 0 as 9 doesn't appear in the array", () => {
    const result = arrayCount9([1, 7, 8, 10, 0]);
    assert.equal(result, 0);
  });
});
