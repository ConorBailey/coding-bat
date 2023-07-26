import { assert } from "chai";
import { monkeyTrouble } from "../src/index";

/* 
We have two monkeys,
  a and b,

and the parameters 
  aSmile and bSmile 
    indicate if each is smiling.
    
We are in trouble if 
  they are 
    both smiling
   or 
    if neither of them is smiling.
    
Return true if we are in trouble.


monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false 
*/

describe("monkeyTrouble", () => {
  it("should return true if both aSmile and bSmilw are true", () => {
    const result = monkeyTrouble(true, true);
    assert.equal(result, true);
  });

  it("should returntrue if both aSmile and bSmile are false", () => {
    const result = monkeyTrouble(false, false);
    assert.equal(result, true);
  });

  it("should return false when aSmile does not equal bSmile", () => {
    const result = monkeyTrouble(true, false);
    assert.equal(result, false);
  });

  it("should return false when aSmile does not equal bSmile", () => {
    const result = monkeyTrouble(false, true);
    assert.equal(result, false);
  });
});
