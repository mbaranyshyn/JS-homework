function reverseString(str) {
    var str = str + '';
    return str.split('').reverse().join('');

}
console.log(reverseString('hello world'));