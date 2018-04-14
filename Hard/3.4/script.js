function findDuplicateInArray(arr) {
    var i,
        result = [],
        obj = {};
    for (i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        result.push(i);
    }
    return result;
}
var arr = [1, 5, 9, 3, 5, 1];
console.log(findDuplicateInArray(arr));