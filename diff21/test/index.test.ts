import { assert } from "chai";
import { diff21 } from "../src/index";

/* 
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
*/

describe("diff21", () => {
  // diff21(19) → 2
  it("should return 2 if the number n is 19 ", () => {
    const result = diff21(19)
    assert.equal(result, 2)
  });
});

describe("diff21", () => {
    // diff21(10) → 11
    it("should return 11 if the number n is 10 ", () => {
      const result = diff21(10)
      assert.equal(result, 11)
    });
  });


  describe("diff21", () => {
    // diff21(21) → 0
    it("should return 0 if the number n is 21 ", () => {
      const result = diff21(21)
      assert.equal(result, 0)
    });
  });