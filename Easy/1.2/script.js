var arr = [1, 92, -5, 25];

function returnMinAndMaxNumbers() {
    var max = arr[0];
    var min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    console.log("max: " + max, "min: " + min);
}

returnMinAndMaxNumbers();