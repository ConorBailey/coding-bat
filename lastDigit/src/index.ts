/*

Given two non-negative int values,
return true if they have the same last digit,
such as with 27 and 57.
Note that the % "mod" operator computes remainders,
so 17 % 10 is 7.


lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true

*/

export function lastDigit(num0: number, num1: number): boolean {
    
  let lastNumber = String(num1).slice(-1);

  if (num0 == Number(lastNumber) && Number(num1) > -1) {
    return true;
  }
  return false;
}
