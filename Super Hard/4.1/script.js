var data = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function sortBubble(data) {
    for (i = 0; i < data.length - 1; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j] < data[j + 1]) {
                var x = data[j]
                var y = data[j + 1]
                data[j] = y
                data[j + 1] = x

            }
        }
    }
    return data;
}
console.log(sortBubble(data));