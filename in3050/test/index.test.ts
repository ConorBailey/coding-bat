import { assert } from "chai";
import { in3050  } from "../src/index";

/* 
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.


in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
in3050(0, 100) → false
in3050(30, 30) → false 

*/

describe("in3040", ()=> {
    it("Should return true because 30 and 31 are in the range 30..40", ()=> {
    const result = in3050(30, 31)
    assert.equal(result, true)
    })

    it("Should return false because 41 is out of range 30..40", ()=> {
        const result = in3050(30, 41)
        assert.equal(result, false)
    })

    it("Should return true because both numbers are in the range of 40 to 50", ()=> {
        const result = in3050(40, 50)
        assert.equal(result, true)
    })

    it("Should return false because both are out of the range of 30..40 and 40..50", ()=> {
        const result = in3050(0, 100)
        assert.equal(result, false)
    })

    it("Should return false because num1 is out of range 30..40 and 40..50", ()=> {
        const result = in3050(30, 29)
        assert.equal(result, false)
    })
    
})