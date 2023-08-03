// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

export function stringE(stringA: string): boolean {
  let stringArray = stringA.split(" "); 
  let numberOfEs = 0;
  for (let counter = 0; counter < stringA.length; counter++ ) {
    if ( stringA.charAt(counter) == "e" || stringA.charAt(counter) == "E" ) {
      numberOfEs++
    }
  }
  if (numberOfEs > 0 && numberOfEs < 4 ) {
    return true
  }
  return false
}