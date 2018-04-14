function outputStars(maxStarsNumber) {
    for (var i = 1; i <= maxStarsNumber; i++) {
        var starsString = '';
        for (var j = 0; j < i; j++) {
            starsString = starsString + '*';
        }
        console.log(starsString);
    }
}

outputStars(5);