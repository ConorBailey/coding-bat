import { assert } from "chai";
import { doubleX } from "../src/index";

/* 
Given a string,
return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true
doubleX("Conorxx") → true
doubleX("exexexx") → false

*/

describe("doubleX", () => {
  it("Should return true", () => {
    const result = doubleX("axxbb");
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = doubleX("axaxax");
    assert.equal(result, false);
  });

  it("Should return true", () => {
    const result = doubleX("xxxxx");
    assert.equal(result, true);
  });

  it("Should return true", () => {
    const result = doubleX("Conorxx");
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = doubleX("exexexx");
    assert.equal(result, false);
  });
});
