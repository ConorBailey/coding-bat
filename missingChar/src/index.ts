/*

Given a non-empty string and an int n,
return a new string where the char at index n has been removed. 
The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
missingChar("kitten", 5) → "kitte"
missingChar("kitten", 3) → "kiten"
*/

export function missingChar(kitten: string, position:number) {
  if( position > -1 && position < kitten.length ) { 
  let result = kitten.replace(kitten.charAt(position), "")
  return result
}
}