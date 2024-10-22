const numbers = [10, 4, 5, 4, 10, 11, 10, 10];
const occuranceCount = countOcuurences(numbers, 10);
const occuranceRwduceCount = countOcuurencesWithReduce(numbers, 10);
function countOcuurences(array, search) {
    let count = 0;
    for (const value of array) {
        if (value === search) count++
    }
    return count;
}
function countOcuurencesWithReduce(array, search) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === search) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}
console.log(occuranceCount);
console.log(occuranceRwduceCount);