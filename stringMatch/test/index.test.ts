import { assert } from "chai";
import { stringMatch } from "../src";

/*
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
stringMatch("ccoonorr", "pcoobors") → 3
stringMatch("aaaaa", "aaaaa") → 4


*/

describe("stringMatch", () => {
  it("Should return 3", () => {
    const result = stringMatch("xxcaazz", "xxbaaz");
    assert.equal(result, 3);
  });

  it("Should return 2", () => {
    const result = stringMatch("abc", "abc");
    assert.equal(result, 2);
  });

  it("Should return 0", () => {
    const result = stringMatch("abc", "axc");
    assert.equal(result, 0);
  });

  it("Should return 3", () => {
    const result = stringMatch("ccoonorr", "pcoobors");
    assert.equal(result, 3);
  });

  it("Should return 4", () => {
    const result = stringMatch("aaaaa", "aaaaa");
    assert.equal(result, 4);
  });
});
