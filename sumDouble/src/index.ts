/* 
Given two int values, 
  return their sum. 
  
Unless the two values
  are the same, 
    then return 
      double their sum.


sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*/

export function sumDouble(num1: number, num2: number) {
  let result = 0
  if (num1 == num2) {
    result = (num1 + num2) * 2

  } else {
    result = num1 + num2
  }
  return result
}