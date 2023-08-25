/*

Count the number of "xx" in the given string. 
We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxxx") → 2
countXX("xxx") → 2
countXX("xxxx") → 3
countXX("xxcxxexxx") → 4
countXX("xxxxxx") → 5


*/

export function countXX(sentence: string): number {
    let xCounter = 0
    for (let index = 0; index < sentence.length; index++) {
        if (sentence.charAt(index) == "x" && sentence.charAt(index +1) == "x") {
            xCounter++
        }
    }
    return xCounter
}