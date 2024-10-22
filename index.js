const numbers = [1, 20, 8, 4, 10, 25, 15];
const maxNumber = getMaxNumber(numbers);
const maxReduce = getMaxWithReduceNumber(numbers);

function getMaxNumber(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (const value of array) {
        if (value > max) max = value;
    }
    return max;
}
function getMaxWithReduceNumber(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}
console.log(maxNumber);
console.log(maxReduce);