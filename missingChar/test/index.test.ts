import { assert } from "chai";
import { missingChar } from "../src/index";

/*
missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
missingChar("kitten", 5) → "kitte"
missingChar("kitten", 3) → "kiten"
*/

describe("missingChar", () => {
  it("Should return ktten", () => {
    const result = missingChar("kitten", 1);
    assert.equal(result, "ktten");
  });

  it("Should return itten", () => {
    const result = missingChar("kitten", 0);
    assert.equal(result, "itten");
  });

  it("Should return kittn", () => {
    const result = missingChar("kitten", 4);
    assert.equal(result, "kittn");
  });

  it("Should return kitte", () => {
    const result = missingChar("kitten", 5);
    assert.equal(result, "kitte");
  });

  it("Should return kiten", () => {
    const result = missingChar("kitten", 3)
    assert.equal(result, "kiten")
  });
});
