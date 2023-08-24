/* 


Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
stringTimes("Hi", -1) → Error
stringTimes("Conor", 3) → "ConorConorConor"

 */

export function stringTimes(stringA: string, num1: number): string {
  if (num1 > 0) {
    return stringA.repeat(num1);
  } else {
    throw new Error("Num1 is negative");
  }
}
