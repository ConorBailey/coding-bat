import { assert } from "chai";
import { sumDouble } from "../src/index";


/* 
Given two int values, 
  return their sum. 
  
Unless the two values
  are the same, 
    then return 
      double their sum.


sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*/

describe("sumDouble", () => {
  it("Should return 3 if num1 = 1 and num2 = 2.", () => {
  const result = sumDouble(1, 2)
  assert.equal(result, 3)
  })


  it("should return 5 if num1 = 3 and num2 = 2", () => {
    const result = sumDouble(3, 2)
    assert.equal(result, 5)
  })

  it("Should return 8 if num1 =2 and num2 = 2 because if num1 == num2 then the result  must be doubled",() => {
    const result = sumDouble(2, 2)
    assert.equal(result, 8)
  })

})