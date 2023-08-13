import { assert } from "chai";
import { front3 } from "../src/index";

/*

Given a string, 
we'll say that the front is the first 3 chars of the string.
If the string length is less than 3, the front is whatever is there.
Return a new string which is 3 copies of the front.


front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"
front3("Conor is ok") → "ConConCon"

//throw error
front3(" abc") → "The sentence doesnt begin with a char"
*/

describe("front3", () => {
  it("Should return JavJavJav", () => {
    const result = front3("Java");
    assert.equal(result, "JavJavJav");
  });

  it("Should return chochocho", () => {
    const result = front3("Chocolate");
    assert.equal(result, "ChoChoCho");
  });

  it("Should return ababab", () => {
    const result = front3("ab");
    assert.equal(result, "ababab");
  });

  it("Should return ConConCon", () => {
    const result = front3("Conor is OK");
    assert.equal(result, "ConConCon");
  });

  it("Should return an Error", () => {
    assert.throws(() => front3(" abc"));
  });
});
