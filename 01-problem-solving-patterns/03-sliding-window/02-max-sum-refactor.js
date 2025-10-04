// time complexity: 0(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

let resultado = maxSubarraySum([2,3,5,7,2,1,8,7], 3); // 16
console.log(resultado);