import { assert } from "chai";
import { posNeg } from "../src/index";

/* 

Given 2 int values, 
return true if one is negative and one is positive. 
Except if the parameter "negative" is true, 
then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
posNeg(-1, 1, true) → false
posNeg(4, 4, true) → false
*/

describe("posNeg", () => {
  it("Should return true", () => {
    const result = posNeg(1, -1, false);
    assert.equal(result, true);
  });

  it("Should returm true", () => {
    const result = posNeg(-1, 1, false);
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = posNeg(-4, -5, true);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = posNeg(-1, 1, true);
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = posNeg(4, 4, true);
    assert.equal(result, false);
  });
});
