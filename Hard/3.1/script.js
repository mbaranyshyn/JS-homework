function recursiveNumber(n) {
    if (n == 0) {
        console.log(0);
        return;
    } else {
        console.log(n);
        recursiveNumber(n - 1);
    }
}

recursiveNumber(100);