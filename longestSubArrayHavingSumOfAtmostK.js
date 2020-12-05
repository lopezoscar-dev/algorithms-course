// Given an array of integers,
// our goal is to find the length of largest subarray
// having sum of its elements atmost ‘k’ where k>0.

// restate: find the longest subarray where the sum is <= k and return the length
// inputs = an array of integers (+ or -) numbers
// output = the length of the largest subarray

// examples [1, 2, 1, 0, 1, 1, 0], 4  because {1,0,1,1,0} => 5, sum 3 length = 5
// [] = 0
// [1] = 1
function longestSubArrayHavingSumOfAtmostK (array, k) {
  if (k > array.length) {
    return null
  }
  let sum = 0
  let cnt = 0
  let maxcnt = 0
  for (let i = 0; i < array.length; i++) {
    // If adding current element doesn't cross limit add it to current window
    if ((sum + array[i]) <= k) {
      sum += array[i]
      cnt++ // aumenta la cantidad de veces que se cumplió el if
    } else if (sum !== 0) {
      // Remove the first element of subarray and decrease the count.
      // Again check if on adding the current element its sum is less than or equal to k.
      // If it’s less than k then add it to sum and increase the count.
      sum = sum - array[i - cnt] + array[i]
    }
    maxcnt = Math.max(cnt, maxcnt)
  }
  return maxcnt

  // max = 3 <= K: true
  // 1 + 2 + 1 = 4 <= 4: true max = 1 +2 +1 (max length = 3)
  // Traverse the array and check if on adding the current element its sum is less than or equal to k.
//   [1, 2, 1, 0, 1, 1, 0], 4
  //   -  -
}

longestSubArrayHavingSumOfAtmostK([1, 2, 1, 0, 1, 1, 0], 4)
