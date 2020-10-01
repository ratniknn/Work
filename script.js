//let numberOfFilms = +prompt('Сколько фильмов вы просмотрели?');

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
      personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели?', '');
    
      while(personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели?', '');
      }
    },
    rememberMyFilms: function(){
      for (let i=0; i < 2; i++){
          var a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            if (a != '' && a != null && a.length < 50 ){
              personalMovieDB.movies[a] = b;
            } 
            else i--;
            
      }
    },
     detectPersonalLevel: function() {
        if (personalMovieDB < 10){
          console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
          console.log("Вы классический зритель");
        } else if (personalMovieDB >=30) {
          console.log("Вы киноман");
        } else {
          console.log("Произошла ошибка");
        }
      },
      showMyDB: function(hidden){
        if (!hidden){
          console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
      if (personalMovieDB.privat){
        personalMovieDB.privat=false;
      }else {personalMovieDB.privat = true;}
    },
    writeYourGenres: function(){
      for(let i=1; i<=3; i++){
        personalMovieDB.genres[i-1]= promt(`Ваш любимый жанр под номером ${i}`);
      }
    }
};

console.log(personalMovieDB);
console.log('OK');