const numbersArray = [10, 2, 51, 17, 19, 40];
console.log("Array:", numbersArray);
console.log(1, includes(numbersArray, 10));
console.log(2, includes(numbersArray, 21));
console.log(10, includes(numbersArray, 0));
console.log(0, includes(numbersArray, 40));

function includes(numbersArray, search) {
    for (const iterator of numbersArray) {
        if (iterator === search) return true;
    }
    return false;
}