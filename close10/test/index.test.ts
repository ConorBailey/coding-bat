import { assert } from "chai";
import { close10  } from "../src/index";

/* 
Given 2 int values,
return whichever value is nearest to the value 10,
or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.


close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0

*/

describe("close10", ()=> {
    it("Should return 8 because 8 is nearer to 10 than 13", ()=> {
        const result = close10(8, 13)
        assert.equal(result, 8)
    })

    it("Should return 8 because 8 is clsoer to 10 than 13", ()=> {
        const result = close10(13, 8)
        assert.equal(result, 8)
    })
    
    it("Should return 0 because 13 and 7 are equally far apart from 10", ()=> {
        const result = close10(13, 7)
        assert.equal(result, 0)
    })

    it("Should return 0 because 0 and 20 are equally far apart from 10", ()=> {
        const result = close10( 0, 20)
        assert.equal(result, 0)
    })
})