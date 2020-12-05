function validAnagram (wordA, wordB) {
  if (!wordA || !wordB) {
    return false
  }
  if (wordA.length !== wordB.length) {
    return false
  }
  const counterA = {}
  const counterB = {}
  for (const letter of wordA) {
    counterA[letter] = ++counterA[letter] || 1
  }
  for (const letter of wordB) {
    counterB[letter] = ++counterB[letter] || 1
  }
  for (const key in counterA) {
    if (counterA[key] !== counterB[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('roma', 'amor'))
console.log(validAnagram('qwerty', 'qweryt'))
console.log(validAnagram('hola', 'hola'))
console.log(validAnagram('chau', 'hola'))
