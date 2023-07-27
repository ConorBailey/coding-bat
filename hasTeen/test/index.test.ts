import { assert } from "chai";
import { hasTeen } from "../src/index";

/* 

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true

*/


describe("hasTeen", ()=> {
  it("Should return true because 13 is a teen", ()=> {
    const result = hasTeen(13, 20, 10)
    assert.equal(result, true)
  })

  it("Should return true because 19 is a teen", ()=> {
    const result = hasTeen(20, 19, 10)
    assert.equal(result, true)
  })

  it("Should return true because 13 is a teen", ()=> {
    const result = hasTeen(20, 10, 13)
    assert.equal(result, true)
  })

  it("Should return false because none of the numbers are teens", ()=> {
    const result = hasTeen(12, 20, 9)
    assert.equal( result, false)
  })
})