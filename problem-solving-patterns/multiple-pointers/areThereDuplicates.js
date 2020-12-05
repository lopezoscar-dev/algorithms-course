/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in. You can solve this using
 * the frequency counter pattern OR the multiple pointers pattern
 *
 * restate = check if there are duplicates in an array
 *
 * input = i'll assume that will receive numbers or strings in form of arguments
 * output = true or false if there are duplicates
 *
 * invalid inputs
 * others than numbers or strings
 *
 * examples
 * areThereDuplicates(1,2,3) //false
 * areThereDuplicates(1,2,2) //true
 * areThereDuplicates('a','b','c','a') //true
 */
function areThereDuplicates () {
  // Approach 1 - multiple pointers
  // Create two pointers i and j, start with i and let j to check the items after i

  // it needs more than one elements
  if (arguments.length <= 1) {
    return false
  }
  if (arguments.length === 2) {
    return arguments[0] === arguments[1]
  }

  let i = 0
  let j = 1
  while (i < arguments.length) {
    // check if are equals
    // if not
    // increase j upto arguments.length -1
    // when j reach the limit, increment i and set j = i+1
    console.log('compare', i, j)
    if (arguments[i] === arguments[j]) {
      return true
    }
    if (j < arguments.length - 1) {
      j++
    } else {
      i++
      j = i + 1
    }
  }
  return false
}

/**
 *     i
 * [1, 2, 3, 4]
 *        j
 *
 *  1 == 2
 *  1 == 3
 *  2 == 3
 *  2 == 4
 *  3 == 4
 *
 */

console.log('areThereDuplicates(1, 2, 3)', areThereDuplicates(1, 2, 3))
console.log('areThereDuplicates(1, 2, 2)', areThereDuplicates(1, 2, 2))
console.log("areThereDuplicates('a', 'b', 'c', 'a')", areThereDuplicates('a', 'b', 'c', 'a'))
console.log("areThereDuplicates('a', 'b', 'c', 'd')", areThereDuplicates('a', 'b', 'c', 'd'))
