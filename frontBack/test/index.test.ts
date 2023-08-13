import { assert } from "chai";
import { frontBack } from "../src/index";

/*

Given a string, 
return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
frontBack("daaab") → "baaad"
frontBack("conor is") → "sonor ic"


*/

describe("frontBack", () => {
  it("Should return eodc", () => {
    const result = frontBack("code");
    assert.equal(result, "eodc");
  });

  it("Should return a", () => {
    const result = frontBack("a");
    assert.equal(result, "a");
  });

  it("Should return ba", () => {
    const result = frontBack("ab");
    assert.equal(result, "ba");
  });

  it("Should return baaad", () => {
    const result = frontBack("daaab");
    assert.equal(result, "baaad");
  });

  it("Should return sonor ic", () => {
    const result = frontBack("conor is");
    assert.equal(result, "sonor ic");
  });
});
