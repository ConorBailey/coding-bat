import { assert } from "chai";
import { loneteen } from "../src/index";

/* 
We'll say that a number is "teen" if it is in the range 13..19 inclusive.
Given 2 int values, return true if one or the other is teen, but not both.


loneTeen(13, 99) -> true
loneTeen(21, 19) -> true
loneTeen(13, 13) -> false
loneTeen(7, 20) -> false
loneTeen(12, 20) -> true

*/

describe("loneteen", () => {
  it("Should return true", () => {
    const result = loneteen(13, 99);
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = loneteen(21, 19);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = loneteen(13, 13);
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = loneteen(7, 20);
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = loneteen(12, 20);
    assert.equal(result, false);
  });
});
