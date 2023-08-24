import { assert } from "chai";
import { frontTimes } from "../src/index";

/*


Given a string and a non-negative int n,
we'll say that the front of the string is the first 3 chars,
or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
frontTimes("Conor", 4) → "ConConCon"
frontTimes("Conor", -1) → Error

*/

describe("frontTimes", () => {
  it("Should return ChoCho", () => {
    const result = frontTimes("Chocolate", 2)
    assert.equal(result, "ChoCho")
  })

  it("should return ChoChoCho", () => {
    const result = frontTimes("Chocolate", 3)
    assert.equal(result, "ChoChoCho")
  })

  it("Should return AbcAbcAbc", () => {
    const result = frontTimes("Abc", 3)
    assert.equal(result, "AbcAbcAbc")
  })

  it("Should return ConConCon", () => {
    const result = frontTimes("Conor", 3)
    assert.equal(result, "ConConCon")
  })

  it("Should throw an error", () => {
    assert.throws(() => frontTimes("Error", -1))
  })
})
