// accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array
// but itwill always be sorted

// restate the problem in my own words
// count the unique values, avoid or remove duplicates

// inputs = a sorted array with Integers (+ or -) numbers
// output = a number with the unique values

// examples = [1,2,3,3,5,7,7,13] = 6 (1,2,3,5,7,13)
//          = [] = 0

// we assume that it'll receive only integer numbers
function countUniqueValues (array) {
  if (array.length === 0) {
    return 0
  }
  if (array.length < 2) {
    return array.length
  }
  // iterate over the array using two variables (i, j)
  // compare the i with the next value (j)
  // if they are the same, i'' continue
  // if theay are differents, override i with the value of j
  // i + 1 is the length of the unique values
  // this algorithm finish when j comes to the end
  let i = 0
  let j = 1
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++
    } else {
      i++
      array[i] = array[j]
    }
  }
  console.log(array)
  return i + 1
}

console.log(countUniqueValues([1, 2, 3, 3, 5, 7, 7, 13]))
console.log(countUniqueValues([0]))
