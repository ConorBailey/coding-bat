/*

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
makes10(5, 5) → true
makes10(-2, 12) → true


*/

export function makes10(numA: number, numB: number): boolean {
  if (numA == 10 || numB == 10) {
    return true;
  } else if (numA + numB == 10) {
    return true;
  }
  return false;
}
