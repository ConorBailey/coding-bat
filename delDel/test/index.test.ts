import { assert } from "chai";
import { delDel } from "../src/index";

/* 

Given a string, if the string "del" appears starting at index 1,
return a string where that "del" has been deleted.
Otherwise, return the string unchanged.


delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"
*/

describe( "delDel", ()=> {
it("Should return abc if the string 'del' starts at index 1 ", () => {
  const result = delDel("adelbc")
  assert.equal(result, "abc")
})

it("Should return aHello if the string 'del' starts at index 1", () => {
  const result = delDel("adelHello")
  assert.equal(result, "aHello")
})

it("should return adebc because the there is no string 'del' that starts at index 1", () => {
  const result = delDel("adedbc")
  assert.equal(result, "adedbc")
})
})
