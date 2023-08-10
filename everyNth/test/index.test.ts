import { assert } from "chai";
import { everyNth } from "../src/index";

/*

Given a non-empty string and an int N,
return the string made starting with char 0,
and then every Nth char of the string. 
So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"
everyNth("ConoRisAG", 4) → "CnRsG"
everyNth("qwertyuiop", 4) → "qto"

*/


describe("everyNth", ()=> {
  it("Should return Mrce", ()=> {
    const result = everyNth("Miracle", 2)
    assert.equal(result, "Mrce")
  })

  it("Should return aceg", ()=> {
    const result = everyNth("abcdefg", 2)
    assert.equal(result, "aceg")
  })

  it("Should return adg", ()=> {
    const result = everyNth("absdefg", 3)
    assert.equal(result, "adg")
  })

  it("Should return CRG", ()=> {
    const result = everyNth("ConoRisAG", 4)
    assert.equal(result, "CRG")
  })

  it("Should return qto", ()=> {
    const result = everyNth("qwertyuiop", 4)
    assert.equal(result, "qto")
  })
})