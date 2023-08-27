import { assert } from "chai";
import { stringSplosion } from "../src";

/* 


Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
stringSplosion("Con") → "CCoCon"
stringSplosion("axab") → "aaxaxaaxab"
*/

describe("stringSplosion", () => {
  it("Should return CCoCodCode", () => {
    const result = stringSplosion("Code");
    assert.equal(result, "CCoCodCode");
  });

  it("Should return aababc", () => {
    const result = stringSplosion("abc");
    assert.equal(result, "aababc");
  });

  it("Should return aab", () => {
    const result = stringSplosion("ab");
    assert.equal(result, "aab");
  });

  it("Should return CCoCon", () => {
    const result = stringSplosion("Con");
    assert.equal(result, "CCoCon");
  });

  it("Should return aaxaxaaxab", () => {
    const result = stringSplosion("axab");
    assert.equal(result, "aaxaxaaxab");
  });
});
