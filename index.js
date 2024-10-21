// Factory Function
function showData (fruit, color, shape) {
    return {
        fruit,
        color,
        shape,
    }
}

let myAddress = showData('Orange', 'Red', 'circle');
console.log(myAddress);

// Constructor fn.
function consData(fruit, color, shape) {
    this.fruit = fruit;
    this.color = color;
    this.shape = shape;
}

let data = new consData('Apple', 'Blue', 'square');
console.log(data);