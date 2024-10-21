showPrimes(25);
function showPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num + ' is prime');
        }
    }
}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}