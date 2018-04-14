function getRandom(oneNumber, twoNumber) {
    return Math.floor(Math.random() * (oneNumber - twoNumber)) + twoNumber;
}
console.log(getRandom(20, 1));