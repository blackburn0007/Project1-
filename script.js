"Use strict";


const numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели7","");
console.log(numberOfFilms);




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2 ; i++) {
    const lastSeen = prompt("Какой фильм вы посмотрели в последний раз?",""),
    lastSeenRank = +prompt("На сколько оцените его?","");
    
    personalMovieDB.movies[lastSeen] = lastSeenRank;
}

console.log(personalMovieDB);
