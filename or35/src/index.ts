/* 

Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
Use the % "mod" operator


or35(3) → true
or35(10) → true
or35(8) → false
or35(107052) → true
or35(30.5) → false

*/

export function or35(num35: number): boolean {
  if (num35 % 3 == 0 || num35 % 5 == 0) {
    return true 
  }
  return false
}