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

console.log(personalMovieDB);

const lastSeen = prompt("Какой фильм вы посмотрели в последний раз?",""),
      lastSeenRank = prompt("На сколько оцените его?",""),
      lastSeen2 = prompt("Какой фильм вы посмотрели в последний раз?",""),
      lastSeenRank2 = prompt("На сколько оцените его?","");

personalMovieDB.movies[lastSeen] = lastSeenRank;
personalMovieDB.movies[lastSeen2] = lastSeenRank2;
