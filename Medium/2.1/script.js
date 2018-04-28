function reverseNumber(num) {
    var num = num + '';
    return num.split('').reverse().join('');

}
console.log(reverseNumber(32243));