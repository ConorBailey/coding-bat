import { assert } from "chai";
import { countXX } from "../src";


/* 



Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxxx") → 2
countXX("xxx") → 2
countXX("xxxx") → 3
countXX("xxcxxexxx") → 4
countXX("xxxxxx") → 5

*/

//countXX("abcxxx") → 2
describe("countXX", () => {
  it("Should return 2", () => {
    const result = countXX("abcxxx")
    assert.equal(result, 2)
  })

// countXX("xxx") → 2
it("Should return 2", () => {
  const result = countXX("xxx")
  assert.equal(result, 2)
})

// countXX("xxxx") → 3
it("Should return 3", () => {
  const result = countXX("xxxx")
  assert.equal(result, 3)
})

// countXX("xxcxxexxx") → 4
it("Should return 4", () => {
  const result = countXX("xxcxxexxx")
  assert.equal(result, 4)
})
// countXX("xxxxxx") → 5
it("Should return 5", () => {
  const result = countXX("xxxxxx")
  assert.equal(result, 5)
})

})
