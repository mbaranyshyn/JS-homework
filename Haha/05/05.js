function currencyConverter(number, currency) {
    if (currency == 'UAN') {
        return number * 26.5;
    } else if (currency == 'USD') {
        return number / 26.5;
    } else {
        return 'I like JS';
    }
}

console.log(currencyConverter(100, 'UAN'));
console.log(currencyConverter(2650, 'USD'));
console.log(currencyConverter(100));