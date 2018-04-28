var arr = [1, 1, 1, 1, 1, 1, 5, 9, 3, 5, 1];
var sort = arr.slice().sort();
var result = [];
for (var i = 0; i < sort.length - 1; i++) {
    if (sort[i + 1] == sort[i]) {
        if (!(result.includes(sort[i]))) {
            result.push(sort[i]);
        }
    }
}

console.log(result);