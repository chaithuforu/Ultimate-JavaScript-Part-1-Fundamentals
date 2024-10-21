function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}
const movie = {
    title: 'Hi World',
    year: 2024,
    director: 'Tom'
};
showProperties(movie);