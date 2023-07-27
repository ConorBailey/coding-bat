/*
 
Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("ix  snacks") → false

*/

export function mixStart(snackString: string):boolean {
  if ((snackString.charAt(1) == "i") && (snackString.charAt(2) == "x")) {
    return true
  } else {
    return false
  }

}