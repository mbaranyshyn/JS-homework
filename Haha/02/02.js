function findHypotenuseSquare(firstSide, secondSide) {
    return firstSide * firstSide + secondSide * secondSide;
}

function findHypotenuse(firstSide, secondSide) {
    var hypotenuseSquare = findHypotenuseSquare(firstSide, secondSide);
    return Math.sqrt(hypotenuseSquare);
}

var hip = findHypotenuse(3, 4)
console.log(hip)