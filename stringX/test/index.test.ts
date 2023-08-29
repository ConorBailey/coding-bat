import { assert } from "chai";
import { stringX, } from "../src";
/*


Given a string, return a version where all the "x" have been removed.
Except an "x" at the very start or end should not be removed.


stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
stringX("xxxxX") → "xX"
stringX("ConoxrisxaxG") → "ConorisaG"

*/
describe("stringX", () => {
  it("Should return xHix", () => {
    const result = stringX("xxHxix")
    assert.equal(result, "xHix")
  })

  it("Should return abcd", () => {
    const result = stringX("abxxxcd")
    assert.equal(result, "abcd")
  })

  it("Should return xabcdx", () => {
    const result = stringX("xabxxxcdx")
    assert.equal(result, "xabcdx")
  })

  it("Should return xX", () => {
    const result = stringX("xxxxX")
    assert.equal(result, "xX")
  })

  it("Should return ConorisaG", () => {
    const result = stringX("ConoxrisxaxG")
    assert.equal(result, "ConorisaG")
  })
})
