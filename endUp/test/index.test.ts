import { assert } from "chai";
import { endUp } from "../src/index";

/* 
Given a string,
return a new string where the last 3 chars are now in upper case. 
If the string has less than 3 chars, uppercase whatever is there. 
Note that str.toUpperCase() returns the uppercase version of a string.


endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
endUp("Conor") → "CoNOR"
endUp("heyyyyy") → "heyyYYY"
*/

describe("endUp", ()=> {
  it("Should return HeLLO", ()=> {
    const result = endUp("Hello")
    assert.equal(result, "HeLLO")
  })

  it("Should return hi thERE", ()=> {
    const result = endUp("hi there")
    assert.equal(result, "hi thERE")
  })

  it("Should return HI", ()=> {
    const result = endUp("hi")
    assert.equal(result, "HI")
  })

  it("Should return CoNOR", ()=> {
    const result = endUp("Conor")
    assert.equal(result, "CoNOR")
  })

  it("Should return heyyYYY", ()=> {
    const result = endUp("heyyyyy")
    assert.equal(result, "heyyYYY")
  })
})