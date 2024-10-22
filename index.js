
function sum (...items) {
    if (items.length === 1 && Array.isArray(items)) {
        items = items[0];
    }
    return items.reduce((a, b) => a + b);
}

console.log(sum([1, 20, 3, 4]));
