// an example.
// write a function called same, which accepts two arrays. 
// the function should return true if every value in the array 
// has it's corresponding value squared in the second array. 
// the frequency of values must be the same.

// time complexity: O(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;

        // console.log(arr1, arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

let resultado = same([3,1,2], [4,9,1]);
console.log(resultado);