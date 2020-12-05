/**
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frecuency digits
 *
 * Restate = count each digit on each number and check if they have the same quantity of digits
 *
 * inputs = two positive integers (0 -> infinite)
 * output = boolean
 * invalid cases
 * a or b less than or equals 0
 *
 * edge cases
 * a === b return true
 *
 * diff lenghts
 * return false
 *
 * examples
 * sameFrequency(182, 281) true
 * sameFrequency(34, 14) false
 * sameFrequency(3589578, 5879385) true
 * sameFrequency(22, 222) false
 */
function sameFrequency (a, b) {
  // Approach 1
  // create a counter with the frequency of the first number
  // iterate over the second number and reduce de counter.
  // at the end, if keys in the counter are in 0, are the same
  if (a === b) {
    return true
  }

  if (a <= 0 || b <= 0) {
    return false
  }
  const digitsA = a.toString()
  const digitsB = b.toString()
  if (digitsA.length !== digitsB.length) {
    return false
  }

  const counter = {}
  for (let i = 0; i < digitsA.length; i++) {
    const digit = digitsA[i]
    counter[digit] = ++counter[digit] || 1
  }
  for (let j = 0; j < digitsB.length; j++) {
    const digit = digitsB[j]
    if (counter[digit]) {
      counter[digit]--
    }
  }
  for (const digit in counter) {
    if (counter[digit] > 0) {
      return false
    }
  }
  return true
}

console.log('181, 118', sameFrequency(181, 118))
console.log('3589578, 5879385', sameFrequency(3589578, 5879385))
console.log('22, 222', sameFrequency(22, 222))
console.log('14, 34', sameFrequency(14, 34))
console.log('10, 10', sameFrequency(10, 10))
console.log('0, 0', sameFrequency(0, 0))
console.log('0, -1', sameFrequency(0, -1))
