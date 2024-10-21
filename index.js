function showAddress(address) {
    for (const key in address) {
        console.log(key, address[key]);
    }
}
let address = {
    city: "TVM",
    state: "Kerala",
    zip: 695017
};

showAddress(address);