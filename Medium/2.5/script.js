function firstNonRepeatedCharacter(str) {
    var first;

    str.split('').some(function(character, index, obj) {
        if (obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character;
            return true;
        }

        return false;
    });

    return first;
}

console.log(firstNonRepeatedCharacter('abacddbec'));