var arr = [1, 5, 9, 3, 5, 1];
var sort = arr.sort();
var result = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sort[i + 1] == sort[i]) {
        result.push(sort[i]);
    }
}

console.log(result);