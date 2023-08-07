import { assert } from "chai";
import { parrotTrouble } from "../src/index";

/* 

We have a loud talking parrot.
The "hour" parameter is the current hour time in the range 0..23.
We are in trouble if the parrot is talking and the hour is before 7 or after 20.
Return true if we are in trouble.


parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
parrotTrouble(true, 21) → true
parrotTrouble(false, -3) → false ( return error )

*/

describe("parrottrouble", () => {
  it("Shold return true if the boolean is true and the number is 6", () => {
    const result = parrotTrouble(true, 6);
    assert.equal(result, true);
  });

  it("Should return false if the boolean is true and the number is 7", () => {
    const result = parrotTrouble(true, 7);
    assert.equal(result, false);
  });

  it("Should return false if the boolean is false and the number is 6", () => {
    const result = parrotTrouble(false, 6);
    assert.equal(result, false);
  });

  it("Should return True", () => {
    const result = parrotTrouble(true, 21);
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = parrotTrouble(false, -3);
    assert.equal(result, false);
  });
});
