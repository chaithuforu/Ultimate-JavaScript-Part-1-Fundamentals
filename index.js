const movies = [
    { title: 'a', year: 2024, rating: 4.5 },
    { title: 'b', year: 2024, rating: 4.7 },
    { title: 'c', year: 2024, rating: 3 },
    { title: 'c', year: 2024, rating: 4.4 },
];

const moviesData = movies
    .filter(m => m.year === 2024 && m.rating >= 4.5)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(moviesData);