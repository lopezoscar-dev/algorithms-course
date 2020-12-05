function validAnagram (wordA, wordB) {
  if (!wordA || !wordB) {
    return false
  }
  if (wordA.length !== wordB.length) {
    return false
  }
  const counterA = {}
  for (const letter of wordA) {
    counterA[letter] = ++counterA[letter] || 1
  }
  for (const letter of wordB) {
    if (!counterA[letter]) { // If the letter doesn't exists or the value is 0, is no an anagram
      return false
    }
    counterA[letter]--
  }

  return true
}

console.log(validAnagram('roma', 'amor'))
console.log(validAnagram('qwerty', 'qweryt'))
console.log(validAnagram('hola', 'hola'))
console.log(validAnagram('chau', 'hola'))
