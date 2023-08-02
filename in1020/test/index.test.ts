import { assert } from "chai";
import { max1020 } from "../src/index";

/* 


Given 2 positive int values, 
return the larger value that is in the range 10..20 inclusive,
or return 0 if neither is in that range.


max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11

*/

describe("max1020", ()=> {
  it("Should return 19 because it is the largest number and is in range 10 to 20", ()=> {
    const result = max1020(11, 19)
    assert.equal(result, 19)
  })

  it("Should return 19 because it is in the range 10 to 20 and is the largest number", ()=> {
    const result = max1020(19, 11)
    assert.equal(result, 19)
  })

  it("Should return 0 because neither is in the range 10 to 20 ", ()=> {
    const result = max1020(9, 21)
    assert.equal(result, 0)
  })  

  it("Should return 9 because both are equal and in the range 10 to 20 ", ()=> {
    const result = max1020(9, 9)
    assert.equal(result, 9)
  })

  it("Should return 20 because both are equal and in the range 10 to 20 ", ()=> {
    const result = max1020(10, 20)
    assert.equal(result, 20)
  })  
})