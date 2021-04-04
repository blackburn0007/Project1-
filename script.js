"Use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        this.count = +prompt ("How many movies have you seen?","");

        while (this.count == "" || this.count == null || isNaN (this.count)) {
            this.count = +prompt ("How many movies have you seen?","");
        }
    },
    detectPersonalLevel: () => {
        if (this.count < 10 ) {
            console.log("You have seen few movies");
        }else if (this.count >= 10 && personalMovieDB.count < 30 ) {
            console.log(" You are a classic viewer");
        }else if (this.count >= 30) {
            console.log("You are a moviegoer");
        }else {
            console.log("An error happened");
        }
    },
    rememberMyMovies: () => {
        for (let i = 0; i < 2 ; i++) {
            const lastSeenMovie = prompt("What movie have you seen recently?",""),
                  lastSeenMovieRank = +prompt("How would you rate the movie on a scale of 1 to 10?","");
            
            if (lastSeenMovie != null && lastSeenMovieRank != null && lastSeenMovie != "" && lastSeenMovieRank != "" && lastSeenMovie.length < 50) {
                this.movies[lastSeenMovie] = lastSeenMovieRank;
                console.log('success');
            } else {
                i--;
                console.log("error");
            }
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (this.private) {
            personalMovieDB.private = false;
        }
        else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
          let favoriteGenre = [];
          while (favoriteGenre == null || favoriteGenre == "") {
            favoriteGenre = prompt(`Your favorite movie genre under number ${i}`);
            this.genres[i - 1] = favoriteGenre;
          }
        }
        this.genres.forEach((item, i) => {
          console.log(`Favorite genre ${i+1} - ${item}`);
        });
    }
};
    