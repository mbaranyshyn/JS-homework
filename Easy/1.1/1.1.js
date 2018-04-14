function getPairNumbers(array) {
    var pairArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pairArray.push(array[i]);
        }
    }
    return pairArray;
}

console.log(getPairNumbers([1, 5, 23, 4, 2, 5, 6]));