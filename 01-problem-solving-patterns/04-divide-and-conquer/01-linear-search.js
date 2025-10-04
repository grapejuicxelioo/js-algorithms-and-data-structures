// an example.
// given a sorted array of integers, 
// write a function called search, that accepts a value 
// and returns the index where the value passed to the 
// function is located. if the value is not found, return -1

// time complexity: O(n)
function search(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val) return i;
    }
    return -1;
}

let resultado = search([1,2,3,4,5,6], 4);
console.log(resultado);