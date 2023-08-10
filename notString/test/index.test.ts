import { assert } from "chai";
import { notString } from "../src/index";

/* 


Given a string,
return a new string where "not " has been added to the front.
However, if the string already begins with "not",
return the string unchanged. Note: 
use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"
notString("conor") → "not conor"
notString("not assert") → "not assert"
*/

describe("notString", () => {
  it("Should return not candy", () => {
    const result = notString("candy");
    assert.equal(result, "not candy");
  });

  it("Should return not x", () => {
    const result = notString("x");
    assert.equal(result, "not x");
  });

  it("Should return not bad", () => {
    const result = notString("not bad");
    assert.equal(result, "not bad");
  });


  it("Should return not conor",()=> {
    const result = notString("conor")
    assert.equal(result, "not conor")
  })

  it("Should return not assert", ()=> {
    const result = notString("not assert")
    assert.equal(result, "not assert")
  })
});
