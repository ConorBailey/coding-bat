import { assert } from "chai";
import { mixStart } from "../src/index";


/* 

Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/


describe("mixStart", () => {
  it("Should return true if string starts with mix", () => {
  const result = mixStart("mix snacks")
  assert.equal(result, true)})

  it("Should return true if the string starts with pix", () => {
  const result = mixStart("pix snacks")
  assert.equal(result, true)
  })

  it("Should return false if the string starts with piz", ()=> {
  const result = mixStart("piz snacks")
  assert.equal(result, false)
  })

  it("Should return false if the string starts with piix", ()=> {
    const result = mixStart("piix snacks")
    assert.equal(result, false)
    })
})




  