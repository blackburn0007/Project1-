"Use strict";

const numberOfFilms = prompt ("How many movies have you seen?","");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2 ; i++) {
    const lastSeenMovie = prompt("What movie have you seen recently?",""),
          lastSeenMovieRank = +prompt("How would you rate the movie on a scale of 1 to 10?","");
    
    if (lastSeenMovie != null && lastSeenMovieRank != null && lastSeenMovie != "" && lastSeenMovieRank != "" && lastSeenMovie.length < 50) {
        personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRank;
        console.log('success');
    } else {
        i--;
        console.log("error");
    }
}
console.log(personalMovieDB);

