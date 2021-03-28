"Use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt ("How many movies have you seen?","");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt ("How many movies have you seen?","");
    }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};



function detectPersonalLevel () {
    if (personalMovieDB.count < 10 ) {
        console.log("You have seen few movies");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log(" You are a classic viewer");
    }else if (personalMovieDB.count >= 30) {
        console.log("You are a moviegoer");
    }else {
        console.log("An error happened");
    }
}

// detectPersonalLevel();


function rememberMyMovies () {
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
}

// rememberMyMovies();

// let i = 0;
// do {
//     const lastSeenMovie = prompt("What movie have you seen recently?",""),
//       lastSeenMovieRank = +prompt("How would you rate the movie on a scale of 1 to 10?","");
//   i++;
//   if (lastSeenMovie != null && lastSeenMovieRank != null && lastSeenMovie != "" && lastSeenMovieRank != "" && lastSeenMovie.length < 50) {
//                     personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRank;
//                     console.log('success');
//                 } else {
//                     i--;
//                     console.log("error");
//                 }
// }
// while (i < 2);

// Using while loop to do the same thing
// let i = 0;
// while ( i < 2) {
//     const lastSeenMovie = prompt("What movie have you seen recently?",""),
//       lastSeenMovieRank = +prompt("How would you rate the movie on a scale of 1 to 10?","");
//     i++;
//     if (lastSeenMovie != null && lastSeenMovieRank != null && lastSeenMovie != "" && lastSeenMovieRank != "" && lastSeenMovie.length < 50) {
//                 personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRank;
//                 console.log('success');
//             } else {
//                 i--;
//                 console.log("error");
//             }
// }


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.private);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        let favoriteGenre = [];
         favoriteGenre = prompt(`Your favorite movie genre under number ${i}`);
         personalMovieDB.genres[i -1] = favoriteGenre;
    }
}

writeYourGenres();

console.log(personalMovieDB);