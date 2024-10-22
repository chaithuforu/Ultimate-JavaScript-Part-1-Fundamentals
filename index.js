let address1 = new Address('TVM', 'Kerala', 691057);
let address2 = new Address('TVM', 'Kerala', 691057);
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areEqual(address1, address3));
console.log(areSame(address1, address3));

function areEqual(address1, address2) {
    for (const key in address1) {
        if (address1[key] != address2[key]) {
            return false;
        }
    }
    return true;
}
function areSame(address1, address2) {
    return address1 === address2;
}

// Constructor fn.
function Address(city, state, zipcode) {
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
}