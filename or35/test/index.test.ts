import { assert } from "chai";
import { or35 } from "../src/index";

/*


Return true if the given non-negative number is
a multiple of 3
or
a multiple of 5.
Use the % "mod" operator


or35(3) → true
or35(10) → true
or35(8) → false
or35(107052) → true
or35(30.5) → false

*/

describe("or35", ()=> {
  it("Should return true ", ()=> {
    const result = or35(3)
      assert.equal(result, true)
  })

  it("Should return true", ()=> {
    const result = or35(10)
      assert.equal(result, true)
  })

  it("Should return false", ()=> {
    const result = or35(8)
      assert.equal(result, false)
  })

  it("Should return true", ()=> {
    const result = or35(107052)
      assert.equal(result, true)
  })

  it("Should return false", ()=> {
    const result = or35(30.5)
      assert.equal(result, false)
  })
})
