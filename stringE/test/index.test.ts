import { assert } from "chai";
import { stringE } from "../src/index";

/* 
// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false
*/

describe("stringE", () => {
  it("Should return true because there is 1 'e' ", () => {
    const result = stringE("Hello");
    assert.equal(result, true);
  });

  it("Should return true because there are 3 'e' ", () => {
    const result = stringE("Heelle");
    assert.equal(result, true);
  });

  it("Should return false because there is 4 'e' ", () => {
    const result = stringE("Heelele");
    assert.equal(result, false);
  });

  it("Should return true because there is 1 'E' ", () => {
    const result = stringE("HEllo");
    assert.equal(result, true);
  });

  it("Should return false because there are no 'e' ", ()=> {
    const result = stringE("hllo")
    assert.equal(result, false)
  })

});
