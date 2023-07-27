/*

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true

*/


export function hasTeen(num1:number, num2:number, num3:number ):boolean {
  if ( (num1 > 12 && num1 <20) || (num2 > 12 && num2 < 20) || (num3 > 12 && num3 < 20)) {
    return true 
}
return false
}