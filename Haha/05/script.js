const VAL = 26.5;

function currencyConverter(number, currency) {
    if (currency == 'UAN') {
        return number * VAL;
    } else if (currency == 'USD') {
        return number / VAL;
    } else {
        return 'I like JS';
    }
}

console.log(currencyConverter(100, 'UAN'));
console.log(currencyConverter(2650, 'USD'));
console.log(currencyConverter(100));