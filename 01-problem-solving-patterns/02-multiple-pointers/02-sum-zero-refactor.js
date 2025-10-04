// time complexity: O(n)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let suma = arr[left] + arr[right];
        if (suma === 0) {
            return [arr[left], arr[right]];
        } else if (suma > 0) {
            right--;
        } else {
            left++;
        }
    }
}

let resultado = sumZero([-4,-2,-1,0,1,3,5]);
console.log(resultado);