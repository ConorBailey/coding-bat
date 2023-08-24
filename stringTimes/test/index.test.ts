import { assert } from "chai";
import { stringTimes } from "../src";
/*


Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
stringTimes("Hi", -1) → Error
stringTimes("Conor", 3) → "ConorConorConor"

*/

describe("stringTimes", () => {
  it("Should return HiHi", () => {
    const result = stringTimes("Hi", 2);
    assert.equal(result, "HiHi");
  });

  it("Should return HiHiHi", () => {
    const result = stringTimes("Hi", 3);
    assert.equal(result, "HiHiHi");
  });

  it("Should return Hi", () => {
    const result = stringTimes("Hi", 1);
    assert.equal(result, "Hi");
  });

  it("Should throw an error", () => {
    assert.throws(() => stringTimes("Hi", -1));
  });

  it("Should return ConorConorConor", () => {
    const result = stringTimes("Conor", 3);
    assert.equal(result, "ConorConorConor");
  });
});
