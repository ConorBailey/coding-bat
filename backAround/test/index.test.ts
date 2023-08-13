import { assert } from "chai";
import { backAround } from "../src/index";

/*

Given a string, 
take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". 
The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
backAround("Conor is OK") → "KConor is OKK"
backAround("") → " throw an Error"

*/
describe("backAround", () => {
  it("Should return tcatt", () => {
    const result = backAround("cat");
    assert.equal(result, "tcatt");
  });

  it("Should return oHelloo", () => {
    const result = backAround("Hello");
    assert.equal(result, "oHelloo");
  });

  it("Should return aaa", () => {
    const result = backAround("a");
    assert.equal(result, "aaa");
  });

  it("Should return KConor is OKK", () => {
    const result = backAround("Conor is OK");
    assert.equal(result, "KConor is OKK");
  });

  it("Should throw an error", () => {
    assert.throws(() => backAround(""));
  });
});
