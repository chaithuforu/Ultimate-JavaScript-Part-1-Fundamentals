const numbers = [1, 2, 3, 4, 5];
try {
    output = getCount(numbers);
    console.log(output);
}
catch (e) {
    console.log(e.message);
}
function getCount(numbers) {
    if (!Array.isArray(numbers)) throw new Error("Invalid numbers array");
    return (numbers.length);
}