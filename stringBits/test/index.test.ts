import { assert } from "chai";
import { stringBits } from "../src";

/* 


Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
stringBits("Hiattlerr") → "Hater"
stringBits("Cdofneofr") → "Conor"
*/

describe("stringBits", () => {
  it("Should return Hlo", () => {
    const result = stringBits("Hello");
    assert.equal(result, "Hlo");
  });

  it("Should return H", () => {
    const result = stringBits("Hi");
    assert.equal(result, "H");
  });

  it("Should return Hello", () => {
    const result = stringBits("Heeololeo");
    assert.equal(result, "Hello");
  });

  it("Should return Hater", () => {
    const result = stringBits("Hiattlerr");
    assert.equal(result, "Hater");
  });

  it("Should return Conor", () => {
    const result = stringBits("Cdofneofr");
    assert.equal(result, "Conor");
  });
});
