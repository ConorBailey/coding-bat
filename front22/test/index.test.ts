import { assert } from "chai";
import { front22 } from "../src/index";

/*


Given a string,
take the first 2 chars and return the string with the 2 chars added at both the front and back,
so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
front22("Conor is OK") → "CoConor is OKCo"
front22("l") → "lll"

*/

describe("front22", () => {
  it("Should return kikittenki", () => {
    const result = front22("kitten");
    assert.equal(result, "kikittenki");
  });

  it("Should return HaHaHa", () => {
    const result = front22("Ha");
    assert.equal(result, "HaHaHa");
  });

  it("Should return ababcab", () => {
    const result = front22("abc");
    assert.equal(result, "ababcab");
  });

  it("Should return CoConor is OKCo", () => {
    const result = front22("Conor is OK");
    assert.equal(result, "CoConor is OKCo");
  });

  it("Should return lll", () => {
    const result = front22("l");
    assert.equal(result, "lll");
  });
});
