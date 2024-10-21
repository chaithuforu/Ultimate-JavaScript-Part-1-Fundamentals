showStars(20);
function showStars(rows) {
    let stars = '';
    for (let index = 1; index <= rows; index++) {
        for (let index1 = 1; index1 <= index; index1++) {
            stars += '*';
        }
        stars += "\n";
    }
    console.log(stars);
}