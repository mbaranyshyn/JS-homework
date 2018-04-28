function firstNonRepeatedCharacter(str) {
    for (var i = 0; i < str.length; i++) {
        var first = str.split(str[i]).length - 1;
        if (first === 1) return str[i];
    }

}

console.log(firstNonRepeatedCharacter('abacddbec'));