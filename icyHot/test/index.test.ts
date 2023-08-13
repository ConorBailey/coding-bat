import { assert } from "chai";
import { icyHot } from "../src/index";

/*


Given two temperatures,
return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
icyHot(0, 100) → false
icyHot(-1, 101) → true

*/

describe("icyHot", ()=> {
  it("Should return true",()=> {
  const result = icyHot(120, -1)
  assert.equal(result, true)˝
})

  it("Should return true", ()=> {
    const result = icyHot(-1, 120)
    assert.equal(result, true)
  })

  it("Should return false", ()=> {
    const result = icyHot(2, 120)
    assert.equal(result, false)
  })

  it("Should return false", ()=> {
    const result = icyHot(0, 100)
    assert.equal(result, false)
  })

  it("Should return true", ()=> {
    const result = icyHot(-1, 101)
    assert.equal(result, true)
  })
})

