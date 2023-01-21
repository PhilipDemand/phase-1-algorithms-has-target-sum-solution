function hasTargetSum(array, target) {
  let indexes = [];

  for(let i = 0; i < array.length; i++){
     for(let j = i + 1; j < array.length; j++){
        if (array[i] + array[j] === target) {
      indexes.push(i);
      indexes.push(j);
        }
     }
  }
  if (indexes.length > 0) {
    return true
  } else {
    return false
  }
}

/* 
  O(n2)
*/

/* 
  add each number to each other number
  if there is ever a result that matches the target number put those numbers in an array
  at the conclusion of the function, if there's anything in that array, return true.  If not, return false.
*/

/*
  line 4: for however long the array is,
  line 5: and for however many items are after it,
  line 6: add each pair of numbers, and if any of them match the target number,
  line 7: add the first one to a blank array
  line 8: and then add the second one to the same array
  line 12: if line 6 found a positive match, return true.  If not, false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
