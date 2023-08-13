import { assert } from "chai";
import { startHi } from "../src/index";

/*


Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
startHi("Hii") → false
startHi("Moshi Moshi") → false

*/

describe("startHi", () => {
  it("SHould return true", () => {
    const result = startHi("hi there");
    assert.equal(result, true);
  });

  it("SHould return true", () => {
    const result = startHi("hi");
    assert.equal(result, true);
  });

  it("Should return false", () => {
    const result = startHi("hello hi");
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = startHi("Hii");
    assert.equal(result, false);
  });

  it("Should return false", () => {
    const result = startHi("Moshi Moshi");
    assert.equal(result, false);
  });
});
