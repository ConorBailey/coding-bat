import { assert } from "chai";
import { altPairs } from "../src";
/*

Given a string,
return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".


altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
altPairs("ConorisaG") → "CoriG"
altPairs("ThisWasFunSir") → "ThWaun"

*/

describe("altPairs", () => {
  it("Should return kien", () => {
    const result = altPairs("kitten");
    assert.equal(result, "kien");
  });

  it("Should return Chole", () => {
    const result = altPairs("Chocolate");
    assert.equal(result, "Chole");
  });

  it("Should return Congrr", () => {
    const result = altPairs("CodingHorror");
    assert.equal(result, "Congrr");
  });

  it("Should return CoriG", () => {
    const result = altPairs("ConorisaG");
    assert.equal(result, "CoriG");
  });

  it("Should return ThWaunr", () => {
    const result = altPairs("ThisWasFunSir");
    assert.equal(result, "ThWaunr");
  });
});

// ThisWasFunSire
// 01234567890123
