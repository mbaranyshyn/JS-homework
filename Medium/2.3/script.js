function generateCombinations(str) {
    combination = new Array();
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            combination.push(str.slice(i, j));
        }
    }
    return combination;
}

console.log(generateCombinations("dog"));