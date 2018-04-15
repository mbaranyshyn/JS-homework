function averageNumber(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}
console.log(averageNumber([1, 4, 2]));