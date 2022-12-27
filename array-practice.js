const findMinimum = (arr) => {
  if(arr.length === 0){
    return undefined
  }
  if(arr.length === 1){
    return arr[0]
  }

  // Your code here
  let minimum = 9999999999999999999
  for(let i = 0; i < arr.length; i++){
     if(minimum >= arr[i] ){
       minimum = arr[i]
     }
  }
  return minimum

  // time complexity = O(n). n will be length of arr - 1
  // space complexity = O(1)
};

const runningSum = arr => {
  // Your code here
  // initially i wanted to create a new Array and populate the new values into it.
  // refactoring the code saves space

  if(arr.length === 0 || arr.length === 1){
    return arr
  }

 for(let i = 1; i < arr.length; i++){
    let holder  = arr[i]
    arr[i] = holder + arr[i-1]
 }
  return arr
};

const evenNumOfChars = arr => {
  // Your code here
  let count = 0
  for(let i = 0;  i< arr.length; i++){
    if(arr[i].length % 2  === 0){
      count++
    }
  }
  return count
  // time complexity = O(n)
  // space complexity = O(1)
};

const smallerThanCurr = arr => {
  // Your code here
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    let current  = arr[i]
    let count = 0
    for(j = 0; j < arr.length; j++){
      if(!(j == i)){
        if(current > arr[j]){
          count++
        }
      }
    }
    newArr.push(count)
  }

  return newArr
  // time complexity O(n * (n-1)) => O(n)
  // space complexity O(n + 4) => O(n)
};

const twoSum = (arr, target) => {
  // Your code here
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(!(j == 1)){
        if((arr[i] + arr[j]) === target ){
          return true
        }
      }
    }
  }
  return false
};

const secondLargest = arr => {
  // Your code here
  let maximum = -1
  let secondLargest = -1

  if(arr.length === 0 || arr.length === 1){
    return undefined
  }

  for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] > maximum){
      secondLargest = maximum;
      maximum = arr[i];
    }
    else if(arr[i] > secondLargest){
      secondLargest = arr[i];
    }
  }
  return secondLargest
    // time complexity O(n)
  // space complexity O(1)
};

const shuffle = (arr) => {
  // Your code here
  // first i have to duplicate arr in order to shuffle the duplicate instead and keep the original intact
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i])
  }

  let shuffled = newArr.sort(function (){
    return Math.random() - 0.5;
  });
  return shuffled

  // time complexity: adjacent for-loops hence O(2n)
  // space complexity : O(n)
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
