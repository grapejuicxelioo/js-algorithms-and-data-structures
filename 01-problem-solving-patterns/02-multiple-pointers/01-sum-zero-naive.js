// an example.
// write a function called sumZero which accepts a 
// sorted array of integers. the function should 
// find the first pair where the sum is 0. 
// return an array that includes both values 
// that sum to zero or undefined if a pair does not exist

// time complexity: O(n^2)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

let resultado = sumZero([-5,-4,-3,-2,-1,0,1,2,3,4,5]);
console.log(resultado);