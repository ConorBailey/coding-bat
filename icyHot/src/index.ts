/* 

Given two temperatures,
return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
icyHot(0, 100) → false
icyHot(-1, 101) → true

 */

export function icyHot(tempA: number, tempB: number): boolean {
  if ((tempA < 0 && tempB > 100) || (tempA > 100 && tempB < 0)) {
    return true;
  } else {
    return false;
  }
}
