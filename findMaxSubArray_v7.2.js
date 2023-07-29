// Function: findMaxSubarray
// Description: Given an array of integers, find the contiguous subarray with the largest sum.
// Example: findMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) should return [4, -1, 2, 1], which has the largest sum (6).
function findMaxSubarray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array of integers.');
  }

  let maxSum = arr[0];
  let currentSum = arr[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum < 0) {
      currentSum = arr[i];
      tempStartIndex = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempStartIndex;
      endIndex = i;
    }
  }

  return arr.slice(startIndex, endIndex + 1);
}

const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4, -8, 1, -2, 3, -1, 6, 7, -3];
const result = findMaxSubarray(inputArray);
console.log(result);