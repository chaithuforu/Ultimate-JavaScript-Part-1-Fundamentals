// Count the number of truthy values in an array.
function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        //  increment count if value is truthy and return the value.
        if (value) {
            count += 1;
        }
    }
    return count;
}

const values = [0, null, 2, undefined, NaN, '1', false, 'apple', true];
console.log(countTruthy(values));